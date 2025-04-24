import { Module } from '@nestjs/common';
import { DouyinService } from './douyin.service';
import { DouyinController } from './douyin.controller';

@Module({
  providers: [DouyinService],
  controllers: [DouyinController],
})
export class DouyinModule { }
