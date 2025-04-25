import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AxiosError } from 'axios';
import type {
  WeiboHotSearchResponse,
  WeiboHotSearchDataRealtimeItem,
} from './weibo.interface';

@Injectable()
export class WeiboService {
  constructor(private readonly httpService: HttpService) { }

  filterWeiboHotSearchData(list: WeiboHotSearchDataRealtimeItem[]) {
    return list.map((item, index) => {
      const param = item?.word_scheme ? item.word_scheme : `#${item.word}#`;
      return {
        ...item,
        id: index + 1,
        title: item.word,
        desc: item.note,
        url: `https://s.weibo.com/weibo?q=${encodeURIComponent(param)}&t=31&band_rank=1&Refer=top`,
      }
    })
  }

  async getHotSearch() {
    const url = 'https://weibo.com/ajax/side/hotSearch';

    const res = await firstValueFrom(
      this.httpService
        .get<WeiboHotSearchResponse>(url)
        .pipe(
          map((res) => {
            return this.filterWeiboHotSearchData(res.data.data.realtime);
          }),
          catchError((error: AxiosError) => {
            console.log(error);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
          }),
        ),
    );

    return res;
  }
}
