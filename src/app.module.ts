import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemService } from './items/item.service';
import { ItemsController } from './items/item.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemService],
})
export class AppModule {}
