"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard_Admin = void 0;
const admin_entity_1 = require("./../../admin/entities/admin.entity");
const common_1 = require("@nestjs/common");
let AuthGuard_Admin = class AuthGuard_Admin {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return request.user instanceof admin_entity_1.Admin;
    }
};
AuthGuard_Admin = __decorate([
    (0, common_1.Injectable)()
], AuthGuard_Admin);
exports.AuthGuard_Admin = AuthGuard_Admin;
//# sourceMappingURL=admin-auth.guard.js.map