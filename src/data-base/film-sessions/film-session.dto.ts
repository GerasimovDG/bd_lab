import { Film } from '../../movie/films/film.interface';

export interface Hall {
  price: number;
  places: number[][];
}

export interface FilmSessionTime {
  time: number;
  cinema: string;
  hall: Hall;
}
export interface FilmSessionDto {
  [filmName: string]: FilmSessionTime[];
}

export interface BookingInfo {
  film: Film;
  session: FilmSessionTime;
}
