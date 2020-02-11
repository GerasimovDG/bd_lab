import { Film } from './film.interface';
export declare class FilmService {
    private films;
    findAll(): Film[];
    getFilmByID(id: number): Film;
}
