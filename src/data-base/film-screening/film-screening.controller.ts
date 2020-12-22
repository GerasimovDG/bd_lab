import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FilmScreeningService } from './film-screening.service';
import { MovieFilmScreening } from './film-screening.entity';
import { map } from 'rxjs/operators';
import { screeningPeriodMapper } from '../shared/constants';
import { FilmScreeningDto } from './film-screening.dto';

@Controller('filmScreenings')
export class FilmScreeningController {

  constructor(private service: FilmScreeningService) {
  }

  @Get()
  findAll(): Observable<FilmScreeningDto> {
    return this.service.getFilmScreeningPeriods()
      .pipe(map(screeningPeriodMapper));
  }

  // @Get(':id')
  @Get('/:name')
  getScreeningPeriod(@Param() params) {
    return this.service.getScreeningPeriodByName(params.name);
  }
  // @Get(':id/id')
  // async get(@Param() params) {
  //   Logger.log(params);
  //   return this.service.getUser(params.id);
  // }
  // @Get('/:login')
  // async findUserByLogin(@Param('login') login: string): Promise<User> {
  //   Logger.log(login);
  //   return this.service.findByLogin(login);
  // }

  @Post()
  async create(@Body() period: MovieFilmScreening): Promise<MovieFilmScreening> {
    // Logger.log(user);
    return this.service.postFilmScreeningPeriod(period);
  }
}
