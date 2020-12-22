import { Controller, Get } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Observable } from 'rxjs';

@Controller('genres')
export class GenresController {

  constructor(private service: GenresService) {
  }

  @Get()
  findAll(): Observable<string[]> {
    return this.service.getGenres();
  }
}
