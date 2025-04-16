"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../errors/AppError");
let UserAuthGuard = class UserAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        try {
            const token = context
                .switchToHttp()
                .getRequest()
                .headers.authorization?.split(' ')[1];
            const verifyTokenResponse = (0, jsonwebtoken_1.verify)(token, process.env.BCRYPT_KEY);
            const payload = {
                user_id: verifyTokenResponse['user_id'],
            };
            request['user'] = payload;
            const { method } = context.switchToHttp().getRequest();
            if ((method == 'POST' || method == 'PATCH' || method == 'DELETE') &&
                !verifyTokenResponse['is_admin']) {
                throw new AppError_1.AppError('Acesso não autorizado para este recurso!', 401);
            }
            return true;
        }
        catch (error) {
            throw new AppError_1.AppError('Acesso não autorizado!', 401);
        }
    }
};
exports.UserAuthGuard = UserAuthGuard;
exports.UserAuthGuard = UserAuthGuard = __decorate([
    (0, common_1.Injectable)()
], UserAuthGuard);
//# sourceMappingURL=auth.guard.js.map