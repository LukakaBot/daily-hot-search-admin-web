import {
  HttpStatus,
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

export interface IResponseData<T> {
  code: HttpStatus;
  msg: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, IResponseData<T>> {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<IResponseData<T>> {
    return next.handle().pipe(
      map<T, IResponseData<T>>((data) => {
        return {
          code: HttpStatus.OK,
          msg: '操作成功',
          data,
        };
      }),
    );
  }
}
