export class FilmScreeningDto {
  [filmName: string]: ScreeningPeriod[];
}

export interface ScreeningPeriod {
  cinema: string;
  periodStart: Date;
  periodEnd: Date;
}
export interface FilmScreeningPeriod {
  [filmName: string]: ScreeningPeriod[];
}
