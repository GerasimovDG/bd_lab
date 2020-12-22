import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieGenre } from './genres.entity';
import { Repository } from 'typeorm/index';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GenresService {

  constructor(@InjectRepository(MovieGenre) private usersRepository: Repository<MovieGenre>) {
  }

  getGenres(): Observable<string[]> {
    return from(this.usersRepository.find())
      .pipe(
        map( genres => genres.map( genre => genre.name)),
      );
  }
}
