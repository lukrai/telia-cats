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
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('name', new DefaultValuePipe(undefined)) name: string | undefined,
    @Query('temperament', new DefaultValuePipe(undefined))
    temperament: string | undefined
  ) {
    return this.catsService.findAll(pageSize, page, name, temperament);
  }

  @Get(':id')
  async findOne(@Param('number') id: number) {
    return this.catsService.getOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() createCatDto: CreateCatDto) {
    return this.catsService.update(id, createCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.catsService.delete(id);
  }
}
