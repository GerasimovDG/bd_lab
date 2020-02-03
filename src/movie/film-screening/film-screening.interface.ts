export interface ScreeningPeriod {
  cinema: string;
  periodStart: Date;
  periodEnd: Date;
}
export interface FilmScreeningPeriod {
  [filmName: string]: ScreeningPeriod[];
}
