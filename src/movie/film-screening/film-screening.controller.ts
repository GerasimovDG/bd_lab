import { Controller, Get, Param } from '@nestjs/common';
import { FilmScreeningService } from './film-screening.service';
import { FilmScreeningPeriod, ScreeningPeriod } from './film-screening.interface';

@Controller('filmScreening')
export class FilmScreeningController {
  constructor(private filmScreeningService: FilmScreeningService) {
  }

  @Get()
  async findAll(): Promise<FilmScreeningPeriod> {
    return this.filmScreeningService.findAll();
  }
  @Get(':name')
  async getScreeningPeriod(@Param() params): Promise<ScreeningPeriod[]> {
    return this.filmScreeningService.getScreeningPeriod(params.name);
  }
}
