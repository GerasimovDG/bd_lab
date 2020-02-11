import { Theater } from './theater.interface';
import { FilmService } from '../films/film.service';
export declare class TheaterService {
    private filmService;
    constructor(filmService: FilmService);
    private cinemas;
    findAll(): Theater[];
}
