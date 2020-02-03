import { Injectable } from '@nestjs/common';
import { Theater } from './theater.interface';
import { FilmService } from '../films/film.service';

@Injectable()
export class TheaterService {

  constructor(private filmService: FilmService) {
  }

  private  cinemas: Theater[] = [
    {
      name: 'Протон',
      address: 'просп. Гагарина, 98, Нижний Новгород, Нижегородская обл., 603009',
      films: [
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Плохие парни навсегда'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Холодное сердце 2'.toLowerCase()),
      ],

    },
    {
      name: 'Соколенок',
      address: ' Большая Покровская ул., 39, лит. А, Нижний Новгород, Нижегородская обл., 603000',
      films: [
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Маяк'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Холодное сердце 2'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Дело Ричарда Джуэлла'.toLowerCase()),
      ],

    },
    {
      name: 'Сентябрь',
      address: 'Нижний Новгород, Б.Покровская, 901ф, 6064400',
      films: [
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Достать ножи'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Холоп'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Плохие парни навсегда'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Паразиты'.toLowerCase()),
      ],

    },
    {
      name: 'Синема-6',
      address: 'Нижний Новгород, ул. Родионова, 187в, ТРЦ «Фантастика»,',
      films: [
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Достать ножи'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Холоп'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Плохие парни навсегда'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Маяк'.toLowerCase()),
        this.filmService.findAll().find(film => film.name.toLowerCase() === 'Холодное сердце 2'.toLowerCase()),
      ],

    },
  ];

  findAll(): Theater[] {
    return this.cinemas;
  }
}
