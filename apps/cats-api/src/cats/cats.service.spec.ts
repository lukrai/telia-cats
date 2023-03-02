import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService, PrismaService],
    }).compile();

    service = module.get<CatsService>(CatsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should calculate correct "skip" and "take" params', async () => {
    prisma.cat.findMany = jest.fn().mockReturnValueOnce([
      {
        id: 35,
        original_id: 'asho',
        name: 'American Shorthair',
        temperament: 'pau',
      },
      {
        id: 36,
        original_id: 'asho',
        name: 'American Shorthair',
        temperament: 'pau',
      },
    ]);

    expect(await service.getAllCats(10, 1, 'mau', 'pau')).toEqual([
      {
        id: 35,
        original_id: 'asho',
        name: 'American Shorthair',
        temperament: 'pau',
      },
      {
        id: 36,
        original_id: 'asho',
        name: 'American Shorthair',
        temperament: 'pau',
      },
    ]);

    expect(prisma.cat.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: 10,
      where: { name: { contains: 'mau' }, temperament: { contains: 'pau' } },
    });
  });
});
