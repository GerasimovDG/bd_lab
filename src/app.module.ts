import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemService } from './items/item.service';
import { ItemsController } from './items/item.controller';
import { UserController } from './movie/users/user.controller';
import { UserService } from './movie/users/user.service';
import { FilmService } from './movie/films/film.service';
import { FilmController } from './movie/films/film.controller';
import { TheaterService } from './movie/theaters/theater.service';
import { TheaterController } from './movie/theaters/theater.controller';
import { FilmSessionService } from './movie/film-session/film-session.service';
import { FilmSessionController } from './movie/film-session/film-session.controller';
import { FilmScreeningService } from './movie/film-screening/film-screening.service';
import { FilmScreeningController } from './movie/film-screening/film-screening.controller';

@Module({
  imports: [],
  controllers: [
    AppController, ItemsController, UserController, FilmController,
    TheaterController, FilmSessionController, FilmScreeningController]
  ,
  providers: [
    AppService, ItemService, UserService, FilmService, TheaterService,
    FilmSessionService, FilmScreeningService,
  ],
})
export class AppModule {}
