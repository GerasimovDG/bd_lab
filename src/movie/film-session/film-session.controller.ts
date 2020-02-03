import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FilmSessionService } from './film-session.service';
import { BookingInfo, FilmSession, FilmSessionTime } from './film-session.interface';

@Controller('filmSession')
export class FilmSessionController {
  constructor(private readonly filmSessionService: FilmSessionService) {
  }

  @Get()
  async findAll(): Promise<FilmSession> {
    return this.filmSessionService.findAll();
  }

  @Get(':name')
  async getFilm(@Param() params): Promise<FilmSessionTime[]> {
    return this.filmSessionService.getFilmSessions(params.name);
  }

  @Put()
  async editPlaces(@Body()  bookingInfo: BookingInfo): Promise<boolean> {
    return this.filmSessionService.editFilmSession(bookingInfo.film.name, bookingInfo.session);
  }
}
