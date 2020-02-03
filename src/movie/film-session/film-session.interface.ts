export interface Hall {
  price: number;
  places: number[][];
}

export interface FilmSessionTime {
  time: number;
  cinema: string;
  hall: Hall;
}
export interface FilmSession {
  [filmName: string]: FilmSessionTime[];
}
