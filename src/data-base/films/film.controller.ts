import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FilmService } from './film.service';
import { MovieFilm } from './film.entity';
import { Observable } from 'rxjs';
import { MovieFilmDto } from './film.dto';
import { map } from 'rxjs/operators';
import { filmMapper } from '../shared/constants';

@Controller('filmss')
export class FilmController {

  constructor(private service: FilmService) {
  }

  @Get()
  findAll(): Observable<MovieFilmDto[]> {
    return this.service.getFilms()
      .pipe(map( films => films.map(filmMapper)));
  }

  @Get(':id')
  getFilm(@Param() params): Observable<MovieFilmDto> {
    return this.service.getFilmsById(params.id)
      .pipe(map(filmMapper));
  }

  @Post()
  async create(@Body() film: MovieFilm): Promise<MovieFilm> {
    // Logger.log(user);
    return this.service.createFilm(film);
  }
}
