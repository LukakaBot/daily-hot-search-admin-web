import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BilibiliService } from './bilibili.service';
import { BilibiliController } from './bilibili.controller';

@Module({
  imports: [HttpModule],
  controllers: [BilibiliController],
  providers: [BilibiliService],
})
export class BilibiliModule { }
