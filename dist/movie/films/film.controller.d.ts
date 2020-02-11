import { FilmService } from './film.service';
import { Film } from './film.interface';
export declare class FilmController {
    private readonly filmService;
    constructor(filmService: FilmService);
    findAll(): Promise<Film[]>;
    getFilm(params: any): Promise<Film>;
}
