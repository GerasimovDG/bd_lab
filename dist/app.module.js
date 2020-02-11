"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const item_service_1 = require("./items/item.service");
const item_controller_1 = require("./items/item.controller");
const user_controller_1 = require("./movie/users/user.controller");
const user_service_1 = require("./movie/users/user.service");
const film_service_1 = require("./movie/films/film.service");
const film_controller_1 = require("./movie/films/film.controller");
const theater_service_1 = require("./movie/theaters/theater.service");
const theater_controller_1 = require("./movie/theaters/theater.controller");
const film_session_service_1 = require("./movie/film-session/film-session.service");
const film_session_controller_1 = require("./movie/film-session/film-session.controller");
const film_screening_service_1 = require("./movie/film-screening/film-screening.service");
const film_screening_controller_1 = require("./movie/film-screening/film-screening.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [
            app_controller_1.AppController, item_controller_1.ItemsController, user_controller_1.UserController, film_controller_1.FilmController,
            theater_controller_1.TheaterController, film_session_controller_1.FilmSessionController, film_screening_controller_1.FilmScreeningController
        ],
        providers: [
            app_service_1.AppService, item_service_1.ItemService, user_service_1.UserService, film_service_1.FilmService, theater_service_1.TheaterService,
            film_session_service_1.FilmSessionService, film_screening_service_1.FilmScreeningService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map