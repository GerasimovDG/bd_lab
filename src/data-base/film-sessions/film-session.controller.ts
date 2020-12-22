import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MovieFilmSession } from './film-session.entity';
import { FilmSessionService } from './film-session.service';
import { BookingInfo } from '../../movie/film-session/film-session.interface';
import { FilmSessionDto } from './film-session.dto';
import { sessionsMapper } from '../shared/constants';
import { map } from 'rxjs/operators';

@Controller('filmSessions')
export class FilmSessionController {

  constructor(private service: FilmSessionService) {
  }

  @Get()
  findAll(): Observable<FilmSessionDto> {
    return this.service.getFilmSessions()
      .pipe(map(sessionsMapper));
  }

  // @Get(':id')
  @Get('/:name')
  getFilmSessions(@Param() params) {
    return this.service.getFilmSessionsByName(params.name);
  }

  @Post()
  async create(@Body() session: MovieFilmSession): Promise<MovieFilmSession> {
    // Logger.log(user);
    return this.service.postFilmSession(session);
  }

  @Put()
  async editPlaces(@Body()  bookingInfo: BookingInfo): Promise<boolean> {
    return this.service.editFilmSession(bookingInfo.film.name, bookingInfo.session);
  }

  //
  // @Get()
  // async findAll(): Promise<FilmSession> {
  //   return this.filmSessionService.findAll();
  // }
  //
  // @Get(':name')
  // async getFilm(@Param() params): Promise<FilmSessionTime[]> {
  //   return this.filmSessionService.getFilmSessions(params.name);
  // }
  //
  // @Put()
  // async editPlaces(@Body()  bookingInfo: BookingInfo): Promise<boolean> {
  //   return this.filmSessionService.editFilmSession(bookingInfo.film.name, bookingInfo.session);
  // }
}
