import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { MovieActorr } from './actors.entity';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ActorsService {

  constructor(@InjectRepository(MovieActorr) private usersRepository: Repository<MovieActorr>) {
  }

  getActors(): Observable<MovieActorr[]> {
    return from(this.usersRepository.find());
      // .pipe( map( (actors: MovieActorr[]) => actors.map( actor => actor.name)));
  }

  async postActor(actor: MovieActorr): Promise<MovieActorr> {
    Logger.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    const newUser = await this.usersRepository.create(actor);
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
