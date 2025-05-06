import { Controller, Get } from '@nestjs/common';
import { JuejinService } from './juejin.service';

@Controller('juejin')
export class JuejinController {
  constructor(private readonly juejinService: JuejinService) { }

  @Get('/')
  getHotSearchData() {
    return this.juejinService.getHotSearchData();
  }
}
