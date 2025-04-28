import { Controller, Get } from '@nestjs/common';
import { WeiboService } from './weibo.service';

@Controller('weibo')
export class WeiboController {
  constructor(private readonly weiboService: WeiboService) { }

  @Get('/')
  async getHotSearch() {
    return this.weiboService.getHotSearch();
  }

  @Get('/hot')
  getHot() {
    return 'get hot';
  }
}
