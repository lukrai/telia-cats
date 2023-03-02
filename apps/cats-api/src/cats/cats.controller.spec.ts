import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService, PrismaService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
