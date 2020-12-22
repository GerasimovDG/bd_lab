import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';

@Controller('cat')
export class CatController {

  constructor(private service: CatService) { }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.service.getCats();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getCat(params.id);
  }

  @Post()
  create(@Body() cat: Cat) {
    return this.service.create(cat);
  }

  // @Put()
  // update(@Body() cat: Cat) {
  //   return this.service.updateCat(cat);
  // }

  @Put(':id')
  update(@Body() cat: Cat, @Param('id') id: string) {
    return this.service.updateCat(id, cat);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteCat(params.id);
  }
}
