import { MovieFilm } from '../films/film.entity';
import { MovieFilmDto } from '../films/film.dto';
import { FilmScreeningPeriod } from '../film-screening/film-screening.dto';
import { MovieFilmScreening } from '../film-screening/film-screening.entity';
import { Logger } from '@nestjs/common';
import { MovieFilmSession } from '../film-sessions/film-session.entity';
import { FilmSessionDto } from '../film-sessions/film-session.dto';

export const filmMapper = (film: MovieFilm): MovieFilmDto => {
  return {
    ...film,
    actors: film.actors.map( actor => actor.name),
    genres: film.genres.map( genre => genre.name),
    producers: film.producers.map( prod => prod.name),
  };
};

export const screeningPeriodMapper = (periods: MovieFilmScreening[]): FilmScreeningPeriod => {
  const res: FilmScreeningPeriod = {};
  periods.forEach( period => {
    if (!res[period.filmName]) {
      res[period.filmName] = [];
    }
    res[period.filmName].push({
      cinema: period.cinema,
      periodStart: new Date(period.periodStart),
      periodEnd: new Date(period.periodEnd),
    });
  });
  Logger.log(res);
  return res;
};

export const sessionsMapper = (sessions: MovieFilmSession[]): FilmSessionDto => {
  const res: FilmSessionDto = {};
  sessions.forEach( session => {
    if (!res[session.filmName]) {
      res[session.filmName] = [];
    }
    res[session.filmName].push({
      time: session.time,
      cinema: session.cinema,
      hall: {
        price: session.price,
        places: session.places,
      },
    });
  });
  return res;
};
