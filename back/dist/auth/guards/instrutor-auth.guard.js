"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard_Intrutor = void 0;
const instrutor_entity_1 = require("../../instrutor/entities/instrutor.entity");
const common_1 = require("@nestjs/common");
let AuthGuard_Intrutor = class AuthGuard_Intrutor {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return request.user instanceof instrutor_entity_1.Instrutor;
    }
};
AuthGuard_Intrutor = __decorate([
    (0, common_1.Injectable)()
], AuthGuard_Intrutor);
exports.AuthGuard_Intrutor = AuthGuard_Intrutor;
//# sourceMappingURL=instrutor-auth.guard.js.map