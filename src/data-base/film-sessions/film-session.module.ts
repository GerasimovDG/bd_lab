import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieFilmSession } from './film-session.entity';
import { FilmSessionService } from './film-session.service';
import { FilmSessionController } from './film-session.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MovieFilmSession])],
  providers: [FilmSessionService],
  controllers: [FilmSessionController],
})
export class FilmSessionModule {}
