import { PartialType } from '@nestjs/mapped-types';
import { CreateBilibiliDto } from './create-bilibili.dto';

export class UpdateBilibiliDto extends PartialType(CreateBilibiliDto) {}
