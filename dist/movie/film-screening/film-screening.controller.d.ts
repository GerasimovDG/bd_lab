import { FilmScreeningService } from './film-screening.service';
import { FilmScreeningPeriod, ScreeningPeriod } from './film-screening.interface';
export declare class FilmScreeningController {
    private filmScreeningService;
    constructor(filmScreeningService: FilmScreeningService);
    findAll(): Promise<FilmScreeningPeriod>;
    getScreeningPeriod(params: any): Promise<ScreeningPeriod[]>;
}
