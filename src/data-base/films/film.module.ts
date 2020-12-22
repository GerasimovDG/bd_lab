import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieFilm } from './film.entity';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MovieFilm])],
  providers: [FilmService],
  controllers: [FilmController],
})
export class FilmsModule {}
