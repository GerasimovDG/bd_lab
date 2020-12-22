import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { MovieFilm } from './film.entity';
import { from, Observable } from 'rxjs';

@Injectable()
export class FilmService {

  constructor(@InjectRepository(MovieFilm) private usersRepository: Repository<MovieFilm>) {
  }

  getFilms(): Observable<MovieFilm[]> {
    return from(this.usersRepository.find({ relations: ['actors', 'genres', 'producers']}));
  }

  getFilmsById(id: string): Observable<MovieFilm> {
    return from(this.usersRepository.findOne( id, { relations: ['actors', 'genres', 'producers']}));
  }

  async createFilm(film: MovieFilm) {
    const newFilm = await this.usersRepository.create(film);
    await this.usersRepository.save(newFilm);
    return newFilm;
  }
}
