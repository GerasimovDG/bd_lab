import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { from, Observable } from 'rxjs';
import { MovieFilmScreening } from './film-screening.entity';
import { ScreeningPeriod } from '../../movie/film-screening/film-screening.interface';
import { filter, map } from 'rxjs/operators';
import { screeningPeriodMapper } from '../shared/constants';

@Injectable()
export class FilmScreeningService {

  constructor(@InjectRepository(MovieFilmScreening) private repository: Repository<MovieFilmScreening>) {
  }

  getFilmScreeningPeriods(): Observable<MovieFilmScreening[]> {
    return from(this.repository.find());
    // .pipe( map( (actors: MovieActorr[]) => actors.map( actor => actor.name)));
  }

  async postFilmScreeningPeriod(period: MovieFilmScreening): Promise<MovieFilmScreening> {
    const newPeriod = await this.repository.create(period);
    await this.repository.save(newPeriod);
    return newPeriod;
  }

  getScreeningPeriodByName(filmName: string): Observable<ScreeningPeriod[]> {
    return from(this.repository.find( {filmName}))
      .pipe(
        map( periodList => periodList.filter( period => period.filmName === filmName)),
        map(screeningPeriodMapper),
        map(res => res[filmName]),
      );

   // return this.filmScreeningPeriod[filmName];
  }
}
