import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieFilmScreening } from './film-screening.entity';
import { FilmScreeningService } from './film-screening.service';
import { FilmScreeningController } from './film-screening.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MovieFilmScreening])],
  providers: [FilmScreeningService],
  controllers: [FilmScreeningController],
})
export class FilmScreeningModule {}
