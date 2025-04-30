import { Test, TestingModule } from '@nestjs/testing';
import { BilibiliController } from './bilibili.controller';
import { BilibiliService } from './bilibili.service';

describe('BilibiliController', () => {
  let controller: BilibiliController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BilibiliController],
      providers: [BilibiliService],
    }).compile();

    controller = module.get<BilibiliController>(BilibiliController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
