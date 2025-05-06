import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { THeaders } from '@/typings/global';
import { BilibiliApiResponse, BilibiliUserNavData, BilibiliVideoRankData } from './interfaces/bilibili.interface';
import { createHash } from 'crypto';

@Injectable()
export class BilibiliService {
  constructor(private readonly httpservice: HttpService) { }

  md5 = createHash('md5');
  MIXIN_KEY_ENC_TAB = [
    46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38,
    41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36,
    20, 34, 44, 52,
  ];

  /** 对 imgKey 和 subKey 进行字符顺序打乱编码 */
  generateMixinKey(rawWbiKey: string) {
    return this.MIXIN_KEY_ENC_TAB.map((char) => rawWbiKey[char])
      .join('')
      .slice(0, 32);
  }

  /** 为请求参数进行 wbi 签名 */
  encWbi(params: { [key: string]: string | number | object }, imgKey: string, subKey: string) {
    const mixinKey = this.generateMixinKey(imgKey + subKey),
      currentTime = Math.round(Date.now() / 1000),
      chrFilter = /[!'()*]/g;

    Object.assign(params, { wts: currentTime }); // 添加 wts 字段
    // 按照 key 重排参数
    const query = Object.keys(params)
      .sort()
      .map((key) => {
        // 过滤 value 中的 "!'()*" 字符
        const value = params[key].toString().replace(chrFilter, '');
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join('&');

    const wbiSign = this.md5.update(query + mixinKey).digest('hex'); // 计算 w_rid

    return query + '&w_rid=' + wbiSign;
  }

  /** 获取最新的 imgKey 和 subKey */
  async getWbiKeys(SESSDATA: string = '') {
    const url = 'https://api.bilibili.com/x/web-interface/nav';
    const header: THeaders = {
      // SESSDATA 字段
      Cookie: `SESSDATA=${SESSDATA}`,
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      Referer: 'https://www.bilibili.com/', // 对于直接浏览器调用可能不适用
    };

    const {
      data: {
        wbi_img: { img_url, sub_url },
      },
    } = await firstValueFrom(
      this.httpservice
        .get<BilibiliApiResponse<BilibiliUserNavData>>(url, { headers: header })
        .pipe(map((res) => res.data)),
    );

    return {
      imgKey: img_url.slice(img_url.lastIndexOf('/') + 1, img_url.lastIndexOf('.')),
      subKey: sub_url.slice(sub_url.lastIndexOf('/') + 1, sub_url.lastIndexOf('.')),
    };
  }

  /** 获取 wbi 签名 */
  async getWbiSignParams() {
    const webKeys = await this.getWbiKeys();
    const params = { foo: '114', bar: '514', baz: 1919810 },
      imgKey = webKeys.imgKey,
      subKey = webKeys.subKey;
    const query = this.encWbi(params, imgKey, subKey);
    console.log(query);
    return query;
  }

  async getHotSearchData() {
    const wbiSignParams = this.getWbiSignParams();
    const url = `https://api.bilibili.com/x/web-interface/ranking/v2?tid=0&type=all&${wbiSignParams}`;

    const {
      data: { list },
    } = await firstValueFrom(
      this.httpservice.get<BilibiliApiResponse<BilibiliVideoRankData>>(url).pipe(map((res) => res.data)),
    );

    return list.map((item, index) => {
      const { title, desc, short_link_v2 } = item;
      return {
        id: index,
        title,
        desc,
        url: short_link_v2,
      };
    });
  }
}
