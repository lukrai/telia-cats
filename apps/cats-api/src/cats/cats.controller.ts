import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
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
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(
    @Query('take', new DefaultValuePipe(10), ParseIntPipe) take: number,
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip: number,
    @Query('name', new DefaultValuePipe(undefined)) name: string | undefined,
    @Query('temperament', new DefaultValuePipe(undefined))
    temperament: string | undefined
  ) {
    return this.catsService.findAll(take, skip, name, temperament);
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
