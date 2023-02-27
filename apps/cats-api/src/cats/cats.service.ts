import { Injectable } from '@nestjs/common';
import { Cat } from '@telia-cats-monorepo/shared-types';
import catsData from './cats-data.json';

@Injectable()
export class CatsService {
  private cats: Cat[] = catsData;

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

  findAll(): Cat[] {
    return this.cats;
  }
}
