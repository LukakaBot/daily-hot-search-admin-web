import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import type {
  WeiboHotSearchData,
  WeiboHotSearchResponse,
} from './weibo.interface';

@Injectable()
export class WeiboService {
  constructor(private readonly httpService: HttpService) { }

  async getHotSearch(): Promise<WeiboHotSearchResponse> {
    const url = 'https://weibo.com/ajax/side/hotSearch';

    const res = await firstValueFrom(
      this.httpService.get(url).pipe(
        map((res: AxiosResponse<WeiboHotSearchResponse>) => {
          return res.data;
        }),
        catchError((error) => {
          console.log(error);
          throw error;
        }),
      ),
    );

    console.log(res);

    return res;
  }
}
