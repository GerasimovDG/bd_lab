import { TheaterService } from './theater.service';
import { Theater } from './theater.interface';
export declare class TheaterController {
    private theaterService;
    constructor(theaterService: TheaterService);
    findAll(): Promise<Theater[]>;
}
