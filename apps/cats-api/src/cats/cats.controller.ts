import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }

  @Get()
  async getAllCats(
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('name', new DefaultValuePipe(undefined)) name: string | undefined,
    @Query('temperament', new DefaultValuePipe(undefined))
    temperament: string | undefined
  ) {
    return this.catsService.getAllCats(pageSize, page, name, temperament);
  }

  @Get(':id')
  async getOneCat(@Param('number') id: number) {
    return this.catsService.getOneCatById(id);
  }

  @Put(':id')
  async updateCat(@Param('id') id: number, @Body() createCatDto: CreateCatDto) {
    return this.catsService.updateCatById(id, createCatDto);
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: number) {
    return this.catsService.deleteCatById(id);
  }
}
