import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DouyinModule } from './modules/douyin/douyin.module';
import { WeiboModule } from './modules/weibo/weibo.module';
import { BilibiliModule } from './modules/bilibili/bilibili.module';
import configuration from 'config/configuration.ts';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    DouyinModule,
    WeiboModule,
    BilibiliModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
