import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieActorr } from './actors.entity';
import { ActorsService } from './actors.service';
import { Observable } from 'rxjs';

@Controller('actors')
export class ActorsController {

  constructor(private service: ActorsService) {
  }

  @Get()
  findAll(): Observable<MovieActorr[]> {
    return this.service.getActors();
  }

  @Post()
  async create(@Body() actor: MovieActorr): Promise<MovieActorr> {
    // Logger.log(user);
    return this.service.postActor(actor);
  }
}
