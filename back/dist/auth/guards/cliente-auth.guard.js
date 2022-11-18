"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard_Cliente = void 0;
const cliente_entity_1 = require("./../../cliente/entities/cliente.entity");
const common_1 = require("@nestjs/common");
let AuthGuard_Cliente = class AuthGuard_Cliente {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return request.user instanceof cliente_entity_1.Cliente;
    }
};
AuthGuard_Cliente = __decorate([
    (0, common_1.Injectable)()
], AuthGuard_Cliente);
exports.AuthGuard_Cliente = AuthGuard_Cliente;
//# sourceMappingURL=cliente-auth.guard.js.map