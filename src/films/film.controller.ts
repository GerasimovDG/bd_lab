import { Controller, Get } from '@nestjs/common';
import { FilmService } from './film.service';
import { Film } from './film.interface';

@Controller('films')
export class FilmController {

  constructor(private readonly filmService: FilmService) {
  }

  @Get()
  async findAll(): Promise<Film[]> {
    return this.filmService.findAll();
  }
}
