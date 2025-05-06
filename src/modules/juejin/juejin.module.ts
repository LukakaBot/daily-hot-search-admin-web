import { Module } from '@nestjs/common';
import { JuejinService } from './juejin.service';
import { JuejinController } from './juejin.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [JuejinController],
  providers: [JuejinService],
})
export class JuejinModule { }
