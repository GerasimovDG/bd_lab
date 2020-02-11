import { FilmScreeningPeriod, ScreeningPeriod } from './film-screening.interface';
export declare class FilmScreeningService {
    private filmScreeningPeriod;
    findAll(): FilmScreeningPeriod;
    getScreeningPeriod(filmName: string): ScreeningPeriod[];
}
