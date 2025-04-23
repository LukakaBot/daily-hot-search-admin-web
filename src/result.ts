import { HttpStatus } from '@nestjs/common';

export interface IResponseData<T> {
  code: HttpStatus;
  msg: string;
  data: T;
}

export class ResponseData<T> {
  constructor(
    public code = HttpStatus.OK,
    public msg: string,
    public data: T,
  ) {
    this.msg = msg || '操作成功';
  }

  static success<T>(data?: T, msg?: string) { }

  static fail<T>(data?: T, msg?: string) { }
}
