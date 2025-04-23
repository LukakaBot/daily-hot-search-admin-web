import { Module } from '@nestjs/common';
import { WeiboService } from './weibo.service';
import { WeiboController } from './weibo.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [WeiboService],
  controllers: [WeiboController],
})
export class WeiboModule { }
