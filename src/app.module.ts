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
import { UsersModule } from './data-base/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieUser } from './data-base/users/user.entity';
import { CatModule } from './cat/cat.module';
import { Cat } from './cat/cat.entity';

import { MovieGenre } from './data-base/genres/genres.entity';
import { MovieActorr } from './data-base/actors/actors.entity';
import { GenresModule } from './data-base/genres/genres.module';
import { ActorsModule } from './data-base/actors/actors.module';
import { FilmsModule } from './data-base/films/film.module';
import { MovieFilm } from './data-base/films/film.entity';
import { TheaterModule } from './data-base/theaters/theater.module';
import { MovieTheater } from './data-base/theaters/theater.entity';
import { MovieFilmScreening } from './data-base/film-screening/film-screening.entity';
import { FilmScreeningModule } from './data-base/film-screening/film-screening.module';
import { FilmSessionModule } from './data-base/film-sessions/film-session.module';
import { MovieFilmSession } from './data-base/film-sessions/film-session.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      entities: [
        Cat,
        MovieUser,
        MovieGenre,
        MovieActorr,
        MovieFilm,
        MovieTheater,
        MovieFilmScreening,
        MovieFilmSession,
      ],
      synchronize: true,
    }),
    UsersModule,
    GenresModule,
    ActorsModule,
    CatModule,
    FilmsModule,
    TheaterModule,
    FilmScreeningModule,
    FilmSessionModule,
    ],
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
