import { FilmSessionService } from './film-session.service';
import { BookingInfo, FilmSession, FilmSessionTime } from './film-session.interface';
export declare class FilmSessionController {
    private readonly filmSessionService;
    constructor(filmSessionService: FilmSessionService);
    findAll(): Promise<FilmSession>;
    getFilm(params: any): Promise<FilmSessionTime[]>;
    editPlaces(bookingInfo: BookingInfo): Promise<boolean>;
}
