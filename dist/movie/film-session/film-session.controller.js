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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const film_session_service_1 = require("./film-session.service");
let FilmSessionController = class FilmSessionController {
    constructor(filmSessionService) {
        this.filmSessionService = filmSessionService;
    }
    async findAll() {
        return this.filmSessionService.findAll();
    }
    async getFilm(params) {
        return this.filmSessionService.getFilmSessions(params.name);
    }
    async editPlaces(bookingInfo) {
        return this.filmSessionService.editFilmSession(bookingInfo.film.name, bookingInfo.session);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilmSessionController.prototype, "findAll", null);
__decorate([
    common_1.Get(':name'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilmSessionController.prototype, "getFilm", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilmSessionController.prototype, "editPlaces", null);
FilmSessionController = __decorate([
    common_1.Controller('filmSession'),
    __metadata("design:paramtypes", [film_session_service_1.FilmSessionService])
], FilmSessionController);
exports.FilmSessionController = FilmSessionController;
//# sourceMappingURL=film-session.controller.js.map