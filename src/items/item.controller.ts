import {Get, Post, Controller, Body, Delete, Param, Put} from '@nestjs/common';
import {ItemService} from './item.service';
import {Item} from './item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() createItemDto: Item): Promise<Item> {
    this.itemsService.create(createItemDto);
    return createItemDto;
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Item[]> {
    this.itemsService.deleteItem(params.id);
    return this.itemsService.findAll();
  }

  @Get(':id')
  async getItem(@Param() params): Promise<Item> {
    return this.itemsService.getItem(params.id);
  }

  @Get('/:tmp/:last')
  async getLastID(@Param('tmp') tmp: string, @Param('last') last: string): Promise<number> {
    return this.itemsService.getLastID();
  }

  @Put(':id')
  async editItem(@Param() params, @Body()  item: Item): Promise<Item[]> {
    this.itemsService.editItem(params.id, item);
    return this.itemsService.findAll();
  }
}
