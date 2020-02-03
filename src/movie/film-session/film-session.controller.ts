import { Controller, Get, Param } from '@nestjs/common';
import { FilmSessionService } from './film-session.service';
import { FilmSession, FilmSessionTime } from './film-session.interface';

@Controller('filmSession')
export class FilmSessionController {
  constructor(private readonly filmSessionServiceService: FilmSessionService) {
  }

  @Get()
  async findAll(): Promise<FilmSession> {
    return this.filmSessionServiceService.findAll();
  }

  @Get(':name')
  async getFilm(@Param() params): Promise<FilmSessionTime[]> {
    return this.filmSessionServiceService.getFilmSessions(params.name);
  }
}
