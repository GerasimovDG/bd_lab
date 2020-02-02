import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemService } from './items/item.service';
import { ItemsController } from './items/item.controller';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

@Module({
  imports: [],
  controllers: [AppController, ItemsController, UserController],
  providers: [AppService, ItemService, UserService],
})
export class AppModule {}
