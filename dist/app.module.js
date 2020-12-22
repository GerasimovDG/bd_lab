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
const users_module_1 = require("./data-base/users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./data-base/users/user.entity");
const cat_module_1 = require("./cat/cat.module");
const cat_entity_1 = require("./cat/cat.entity");
const genres_entity_1 = require("./data-base/genres/genres.entity");
const actors_entity_1 = require("./data-base/actors/actors.entity");
const genres_module_1 = require("./data-base/genres/genres.module");
const actors_module_1 = require("./data-base/actors/actors.module");
const film_module_1 = require("./data-base/films/film.module");
const film_entity_1 = require("./data-base/films/film.entity");
const theater_module_1 = require("./data-base/theaters/theater.module");
const theater_entity_1 = require("./data-base/theaters/theater.entity");
const film_screening_entity_1 = require("./data-base/film-screening/film-screening.entity");
const film_screening_module_1 = require("./data-base/film-screening/film-screening.module");
const film_session_module_1 = require("./data-base/film-sessions/film-session.module");
const film_session_entity_1 = require("./data-base/film-sessions/film-session.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123456',
                database: 'postgres',
                entities: [
                    cat_entity_1.Cat,
                    user_entity_1.MovieUser,
                    genres_entity_1.MovieGenre,
                    actors_entity_1.MovieActorr,
                    film_entity_1.MovieFilm,
                    theater_entity_1.MovieTheater,
                    film_screening_entity_1.MovieFilmScreening,
                    film_session_entity_1.MovieFilmSession,
                ],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            genres_module_1.GenresModule,
            actors_module_1.ActorsModule,
            cat_module_1.CatModule,
            film_module_1.FilmsModule,
            theater_module_1.TheaterModule,
            film_screening_module_1.FilmScreeningModule,
            film_session_module_1.FilmSessionModule,
        ],
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