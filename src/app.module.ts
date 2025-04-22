import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DouyinModule } from './douyin/douyin.module';

@Module({
  imports: [DouyinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
