import { Film } from '../films/film.interface';
export interface Theater {
    name: string;
    address: string;
    films: Film[];
}
