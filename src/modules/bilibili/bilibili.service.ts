import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { THeaders } from '@/typings/global';
import { BilibiliApiResponse } from './interfaces/bilibili.interface';

@Injectable()
export class BilibiliService {
  constructor(private readonly httpservice: HttpService) {

  }

  generateMixinKey(rawWbiKey: string) {
    const MIXIN_KEY_ENC_TAB = [
      46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
      33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40,
      61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11,
      36, 20, 34, 44, 52
    ];

    return MIXIN_KEY_ENC_TAB.map((char) => rawWbiKey[char]).join("").slice(0, 32);
  }

  async getWbiKeys() {
    const url = 'https://api.bilibili.com/x/web-interface/nav';
    const header: THeaders = {
      'Cookie': 'SESSDATA=12345',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
      'Referer': 'https://www.bilibili.com/',
    }

    const { data: { wbi_img: { img_url, sub_url } } } = await firstValueFrom(this.httpservice.get<BilibiliApiResponse>(url, { headers: header }).pipe(map(res => res.data)));
    return {
      img_key: img_url.split('/').pop()?.split('.')[0] || '',
      sub_key: sub_url.split('/').pop()?.split('.')[0] || ''
    };
  }

  async getHotSearchData() {
    const wbiKey = await this.getWbiKeys();
    this.generateMixinKey(wbiKey.img_key);
    return wbiKey;
  }
}
