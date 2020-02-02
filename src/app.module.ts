import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemService } from './items/item.service';
import { ItemsController } from './items/item.controller';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { FilmService } from './films/film.service';
import { FilmController } from './films/film.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemsController, UserController, FilmController],
  providers: [AppService, ItemService, UserService, FilmService],
})
export class AppModule {}
