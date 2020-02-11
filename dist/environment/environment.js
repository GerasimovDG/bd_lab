"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostname = process.env.HOST || 'localhost';
exports.port = process.env.PORT || '3000';
exports.environment = {
    production: false,
    apiUrl: `http://${exports.hostname}:${exports.port}/`,
};
//# sourceMappingURL=environment.js.map