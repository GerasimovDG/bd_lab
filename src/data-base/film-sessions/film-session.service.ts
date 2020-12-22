import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { from, Observable } from 'rxjs';
import { MovieFilmSession } from './film-session.entity';
import { FilmSessionTime } from './film-session.dto';
import { filter, map, take } from 'rxjs/operators';
import { screeningPeriodMapper, sessionsMapper } from '../shared/constants';

@Injectable()
export class FilmSessionService {

  constructor(@InjectRepository(MovieFilmSession) private repository: Repository<MovieFilmSession>) {
  }

  getFilmSessions(): Observable<MovieFilmSession[]> {
    return from(this.repository.find());
    // .pipe( map( (actors: MovieActorr[]) => actors.map( actor => actor.name)));
  }

  // async postFilmScreeningPeriod(period: MovieFilmScreening): Promise<MovieFilmScreening> {
  //   const newPeriod = await this.repository.create(period);
  //   await this.repository.save(newPeriod);
  //   return newPeriod;
  // }
  //
  // getScreeningPeriodByName(filmName: string): Observable<ScreeningPeriod[]> {
  //   return from(this.repository.find( {filmName}))
  //     .pipe(
  //       map( periodList => periodList.filter( period => period.filmName === filmName)),
  //       map(screeningPeriodMapper),
  //       map(res => res[filmName]),
  //     );
  //
  //   // return this.filmScreeningPeriod[filmName];
  // }

  getFilmSessionsByName(filmName: string): Observable<FilmSessionTime[]> {
    return from(this.repository.find({filmName}))
      .pipe(
        map( sessions => sessions.filter( session => session.filmName === filmName)),
        map(sessionsMapper),
        map(res => res[filmName]),
      );
  }

  async getFilmSessionId(filmName: string, newData: FilmSessionTime): Promise<string> {
    const sessions = await this.repository.find({filmName});
    const neededSession = sessions.find( session =>
      session.filmName === filmName && session.time === newData.time && session.cinema === newData.cinema);
    if (neededSession) {
      return neededSession.id;
    }
    return '';
  }

  async postFilmSession(session: MovieFilmSession): Promise<MovieFilmSession> {
    const newSession = await this.repository.create(session);
    await this.repository.save(newSession);
    return newSession;
  }

  async editFilmSession(filmName: string, newData: FilmSessionTime): Promise<boolean> {
    const sessionId = await this.getFilmSessionId(filmName, newData);
    const filmSession: MovieFilmSession = await this.repository.findOne(sessionId);
    Logger.log(sessionId);
    Logger.log(filmSession);

    if (!sessionId) {
      return false;
    }
    const updatedFilmSession: MovieFilmSession = JSON.parse(JSON.stringify(filmSession));

    let flag = true;
    for (let i = 0; i < updatedFilmSession.places.length; i++) {
      for (let j = 0; j < updatedFilmSession.places[i].length; j++) {
        if (newData.hall.places[i][j] === 1) {
          if (filmSession.places[i][j] === 2) {
            flag = false;
            return flag;
          }
        }
      }
    }
    if (flag === true) {
      for (let i = 0; i < updatedFilmSession.places.length; i++) {
        for (let j = 0; j < updatedFilmSession.places[i].length; j++) {
          if (newData.hall.places[i][j] === 1) {
            updatedFilmSession.places[i][j] = 2;
          }
        }
      }

      await this.repository.update(sessionId, updatedFilmSession);
      const updatedSession = await this.repository.findOne(sessionId);
      if (!updatedSession) {
        return false;
      }
    }
    return flag;
  }
}
