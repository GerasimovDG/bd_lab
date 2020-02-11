import { FilmSession, FilmSessionTime } from './film-session.interface';
export declare class FilmSessionService {
    private filmsessions;
    findAll(): FilmSession;
    getFilmSessions(filmName: string): FilmSessionTime[];
    editFilmSession(filmName: string, newData: FilmSessionTime): boolean;
}
