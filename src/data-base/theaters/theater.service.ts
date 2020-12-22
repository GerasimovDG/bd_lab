import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { from, Observable } from 'rxjs';
import { MovieTheater } from './theater.entity';

export class TheaterService {

  constructor(@InjectRepository(MovieTheater) private usersRepository: Repository<MovieTheater>) {
  }

  getTheaters(): Observable<MovieTheater[]> {
    return from(this.usersRepository.find({ relations: ['films']}));
  }

  getTheaterById(id: string): Observable<MovieTheater> {
    return from(this.usersRepository.findOne( id, { relations: ['films']}));
  }

  async createTheater(theater: MovieTheater) {
    const newTheater = await this.usersRepository.create(theater);
    await this.usersRepository.save(newTheater);
    return newTheater;
  }
}
