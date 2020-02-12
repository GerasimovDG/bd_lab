import { FilmSession, FilmSessionTime } from './film-session.interface';

export class FilmSessionService {
  private filmsessions: FilmSession = {
    'Достать ножи' : [
      { time: 40500, cinema: 'Синема-6',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] },
      },
      { time: 55500, cinema: 'Синема-6',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] },
      },
      { time: 60600, cinema: 'Синема-6',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] },
      },
      { time: 50400, cinema: 'Сентябрь',
        hall: { price: 150, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] },
      },
      { time: 80400, cinema: 'Сентябрь',
        hall: { price: 150, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] },
      },
    ],
    'Холоп' : [
      { time: 41600, cinema: 'Синема-6',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 53500, cinema: 'Синема-6',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 65600, cinema: 'Синема-6',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 30500, cinema: 'Сентябрь',
        hall: { price: 150, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 45400, cinema: 'Сентябрь',
        hall: { price: 150, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
    ],
    'Плохие парни навсегда' : [
      { time: 47400, cinema: 'Протон',
        hall: { price: 150, places: [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0] ] } },
      { time: 57000, cinema: 'Протон',
        hall: { price: 150, places: [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0] ] } },
      { time: 66600, cinema: 'Протон',
        hall: { price: 150, places: [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0] ] } },
      { time: 79200, cinema: 'Протон',
        hall: { price: 150, places: [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0] ] } },
      { time: 47400, cinema: 'Сентябрь',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 57600, cinema: 'Сентябрь',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 32400, cinema: 'Синема-6',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 43200, cinema: 'Синема-6',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 79200, cinema: 'Синема-6',
        hall: { price: 200, places: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
    ],
    'Холодное сердце 2' : [
      { time: 36000, cinema: 'Протон', hall: { price: 150, places: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 2, 2, 0, 0, 0], [0, 0, 0, 0, 2, 2, 0, 0, 0] ] } },
      { time: 42000, cinema: 'Протон', hall: { price: 150, places: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 0, 0, 2, 2, 0, 0, 0],
            [0, 0, 2, 2, 2, 2, 2, 0, 0], [0, 0, 0, 2, 2, 0, 0, 0, 0] ] } },
      { time: 32400, cinema: 'Соколенок', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 46800, cinema: 'Соколенок', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 68400, cinema: 'Соколенок', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 36000, cinema: 'Синема-6', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 46800, cinema: 'Синема-6', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
    ],
    'Маяк' : [
      { time: 39600, cinema: 'Соколенок', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 61200, cinema: 'Соколенок', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 75600, cinema: 'Соколенок', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 3600, cinema: 'Синема-6', hall: { price: 180, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 82800, cinema: 'Синема-6', hall: { price: 180, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
    ],
    'Паразиты' : [
      { time: 600, cinema: 'Сентябрь', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 36000, cinema: 'Сентябрь', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 61200, cinema: 'Сентябрь', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
    ],
    'Дело Ричарда Джуэлла' : [
      { time: 50400, cinema: 'Соколенок', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
      { time: 82800, cinema: 'Соколенок', hall: { price: 150, places: [
        [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0] ] } },
    ],
  };

  findAll(): FilmSession {
    return this.filmsessions;
  }

  getFilmSessions(filmName: string): FilmSessionTime[] {
    return this.filmsessions[filmName];
  }

  editFilmSession(filmName: string, newData: FilmSessionTime): boolean {
    let flag = true;
    for (const obj of this.filmsessions[filmName]) {
      if (obj.time.toString() === newData.time.toString() && obj.cinema.toLowerCase() === newData.cinema.toLowerCase()) {
        for (let i = 0; i < obj.hall.places.length; i++) {
          for (let j = 0; j < obj.hall.places[i].length; j++) {
            if (newData.hall.places[i][j] === 1) {
              if (obj.hall.places[i][j] === 2) {
                // уже куплено, возвращаем ошибку
                flag = false;
                return;
              }
            }
          }
        }
      }
    }
    if (flag === true) {
      for (const obj of this.filmsessions[filmName]) {
        if (obj.time.toString() === newData.time.toString() && obj.cinema.toLowerCase() === newData.cinema.toLowerCase()) {
          for (let i = 0; i < obj.hall.places.length; i++) {
            for (let j = 0; j < obj.hall.places[i].length; j++) {
              if (newData.hall.places[i][j] === 1) {
                obj.hall.places[i][j] = 2;
              }
            }
          }
        }
      }
    }
    return flag;
  }
}
