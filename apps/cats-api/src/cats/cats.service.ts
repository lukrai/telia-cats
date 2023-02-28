import { Injectable } from '@nestjs/common';
import { Cat } from '@telia-cats-monorepo/shared-types';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  private cats: Cat[];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  getOne(id: string) {
    return this.cats.find((cat) => cat.id === id);
  }

  update(id: string, catToUpdate: Cat) {
    this.cats = this.cats.map((cat) => {
      if (catToUpdate.id === id) {
        return catToUpdate;
      }
      return cat;
    });
  }

  patch(id: string, catToUpdate: Cat) {
    this.cats = this.cats.map((cat) => {
      if (catToUpdate.id === id) {
        return catToUpdate;
      }
      return cat;
    });
  }

  delete(id: string) {
    this.cats = this.cats.filter((cat) => cat.id !== id);
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
