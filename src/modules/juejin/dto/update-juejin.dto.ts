import { PartialType } from '@nestjs/mapped-types';
import { CreateJuejinDto } from './create-juejin.dto';

export class UpdateJuejinDto extends PartialType(CreateJuejinDto) {}
