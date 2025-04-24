import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DouyinModule } from './modules/douyin/douyin.module';
import { WeiboModule } from './modules/weibo/weibo.module';

@Module({
  imports: [DouyinModule, WeiboModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
