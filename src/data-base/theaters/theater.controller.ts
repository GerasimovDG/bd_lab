import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TheaterService } from './theater.service';
import { MovieTheater } from './theater.entity';
import { FilmScreeningPeriod } from '../../movie/film-screening/film-screening.interface';

@Controller('theaterss')
export class TheaterController {

  constructor(private service: TheaterService) {
  }

  @Get()
  findAll(): Observable<MovieTheater[]> {
    return this.service.getTheaters();
  }

  @Get(':id')
  getFilm(@Param() params): Observable<MovieTheater> {
    return this.service.getTheaterById(params.id);
  }

  @Post()
  async create(@Body() theater: MovieTheater): Promise<MovieTheater> {
    // Logger.log(user);
    return this.service.createTheater(theater);
  }
}
