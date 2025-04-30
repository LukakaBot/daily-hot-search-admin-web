import { Controller, Get } from '@nestjs/common';
import { BilibiliService } from './bilibili.service';

@Controller('bilibili')
export class BilibiliController {
  constructor(private readonly bilibiliService: BilibiliService) { }

  @Get('/')
  async getHotSearchData() {
    return await this.bilibiliService.getHotSearchData();
  }
}
