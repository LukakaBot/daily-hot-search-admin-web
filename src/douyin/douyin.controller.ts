import { Controller, Get } from '@nestjs/common';
import { DouyinService } from './douyin.service';

@Controller('douyin')
export class DouyinController {
  constructor(private readonly douyinService: DouyinService) { }

  @Get('/trending')
  getDouyinTrending() {
    return this.douyinService.getDouyinTrending();
  }
}
