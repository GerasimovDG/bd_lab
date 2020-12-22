"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FilmScreeningService {
    constructor() {
        this.filmScreeningPeriod = {
            'Достать ножи': [
                { cinema: 'Сентябрь', periodStart: new Date('2019-11-28'), periodEnd: new Date('2021-03-07') },
                { cinema: 'Синема-6', periodStart: new Date('2019-11-28'), periodEnd: new Date('2021-03-07') },
            ],
            'Холоп': [
                { cinema: 'Сентябрь', periodStart: new Date('2019-12-26'), periodEnd: new Date('2021-03-26') },
                { cinema: 'Синема-6', periodStart: new Date('2019-12-26'), periodEnd: new Date('2021-03-26') },
            ],
            'Плохие парни навсегда': [
                { cinema: 'Протон', periodStart: new Date('2020-01-23'), periodEnd: new Date('2021-03-05') },
                { cinema: 'Сентябрь', periodStart: new Date('2020-01-23'), periodEnd: new Date('2021-03-23') },
                { cinema: 'Синема-6', periodStart: new Date('2020-01-23'), periodEnd: new Date('2021-03-23') },
            ],
            'Холодное сердце 2': [
                { cinema: 'Протон', periodStart: new Date('2019-12-28'), periodEnd: new Date('2021-03-10') },
                { cinema: 'Соколенок', periodStart: new Date('2019-12-28'), periodEnd: new Date('2021-03-16') },
                { cinema: 'Синема-6', periodStart: new Date('2019-12-28'), periodEnd: new Date('2021-03-12') },
            ],
            'Маяк': [
                { cinema: 'Соколенок', periodStart: new Date('2020-01-16'), periodEnd: new Date('2021-03-16') },
                { cinema: 'Синема-6', periodStart: new Date('2020-01-16'), periodEnd: new Date('2021-03-16') },
            ],
            'Паразиты': [
                { cinema: 'Сентябрь', periodStart: new Date('2020-01-25'), periodEnd: new Date('2021-03-25') },
            ],
            'Дело Ричарда Джуэлла': [
                { cinema: 'Сентябрь', periodStart: new Date('2020-01-09'), periodEnd: new Date('2021-03-09') },
            ],
        };
    }
    findAll() {
        return this.filmScreeningPeriod;
    }
    getScreeningPeriod(filmName) {
        return this.filmScreeningPeriod[filmName];
    }
}
exports.FilmScreeningService = FilmScreeningService;
//# sourceMappingURL=film-screening.service.js.map