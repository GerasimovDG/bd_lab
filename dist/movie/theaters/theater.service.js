"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const film_service_1 = require("../films/film.service");
let TheaterService = class TheaterService {
    constructor(filmService) {
        this.filmService = filmService;
        this.cinemas = [
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
    }
    findAll() {
        return this.cinemas;
    }
};
TheaterService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [film_service_1.FilmService])
], TheaterService);
exports.TheaterService = TheaterService;
//# sourceMappingURL=theater.service.js.map