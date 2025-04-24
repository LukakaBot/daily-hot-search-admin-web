import { Injectable } from '@nestjs/common';

@Injectable()
export class DouyinService {
  getDouyinTrending() {
    return 'douyin trending';
  }
}
