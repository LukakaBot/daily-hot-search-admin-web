import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import type { JuejinApiResponse, JuejinArticleRankData } from './interfaces/juejin.interfaces';

@Injectable()
export class JuejinService {
  constructor(private readonly httpService: HttpService) { }

  async getHotSearchData() {
    const url = 'https://api.juejin.cn/content_api/v1/content/article_rank';
    const params = {
      category_id: 1,
      type: 'hot',
    };

    const { data } = await firstValueFrom(this.httpService.get<JuejinApiResponse<JuejinArticleRankData[]>>(url, { params }).pipe(map(res => res.data)))

    return data.map((item, index) => {
      const { title, brief, content_id } = item.content;
      return {
        id: index + 1,
        title,
        desc: brief,
        url: `https://juejin.cn/post/${content_id}`,
      }
    })
  }
}
