import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async create(cat: CreateCatDto) {
    return this.prisma.cat.create({ data: cat });
  }

  getOne(id: number) {
    return this.prisma.cat.findFirstOrThrow({ where: { id } });
  }

  async update(id: number, catToUpdate: CreateCatDto) {
    await this.prisma.cat.findFirstOrThrow({ where: { id } });
    return this.prisma.cat.update({ where: { id }, data: catToUpdate });
  }

  async delete(id: number) {
    await this.prisma.cat.findFirstOrThrow({ where: { id } });
    return this.prisma.cat.delete({ where: { id } });
  }

  findAll(take: number, skip: number, name?: string, temperament?: string) {
    return this.prisma.cat.findMany({
      skip,
      take,
      where: {
        name: {
          contains: name,
        },
        temperament: {
          contains: temperament,
        },
      },
    });
  }
}
