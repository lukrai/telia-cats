import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Cat } from '@telia-cats-monorepo/shared-types';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.getOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
    return this.catsService.patch(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
