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
exports.Cliente = void 0;
const preferencia_entity_1 = require("../../preferencia/entities/preferencia.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Cliente = class Cliente extends usuario_entity_1.Usuario {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cliente.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => preferencia_entity_1.Preferencia, {
        cascade: true,
        eager: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)({ name: 'cliente_tem_preferencia' }),
    __metadata("design:type", Array)
], Cliente.prototype, "preferencias", void 0);
Cliente = __decorate([
    (0, typeorm_1.ChildEntity)()
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.entity.js.map