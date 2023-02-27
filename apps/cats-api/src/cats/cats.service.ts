import { Injectable } from '@nestjs/common';
import { Cat } from '@telia-cats-monorepo/shared-types';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
