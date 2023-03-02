import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async createCat(cat: CreateCatDto) {
    return this.prisma.cat.create({ data: cat });
  }

  getOneCatById(id: number) {
    return this.prisma.cat.findFirstOrThrow({ where: { id } });
  }

  async updateCatById(id: number, catToUpdate: CreateCatDto) {
    await this.prisma.cat.findFirstOrThrow({ where: { id } });
    return this.prisma.cat.update({ where: { id }, data: catToUpdate });
  }

  async deleteCatById(id: number) {
    await this.prisma.cat.findFirstOrThrow({ where: { id } });
    return this.prisma.cat.delete({ where: { id } });
  }

  getAllCats(take: number, page: number, name?: string, temperament?: string) {
    const skip = page > 0 ? take * (page - 1) : 0;
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
