import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DouyinModule } from './douyin/douyin.module';
import { WeiboModule } from './weibo/weibo.module';

@Module({
  imports: [DouyinModule, WeiboModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
