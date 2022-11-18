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
exports.Instrutor = void 0;
const local_treinamento_entity_1 = require("./../../local-treinamento/entities/local-treinamento.entity");
const exercicio_entity_1 = require("./../../exercicio/entities/exercicio.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Instrutor = class Instrutor extends usuario_entity_1.Usuario {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Instrutor.prototype, "cref", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Instrutor.prototype, "modalidade", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exercicio_entity_1.Exercicio, {
        cascade: true,
        eager: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)({ name: 'instrutor_tem_exercicios' }),
    __metadata("design:type", Array)
], Instrutor.prototype, "exercicios", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => local_treinamento_entity_1.LocalTreinamento, {
        cascade: true,
        eager: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)({ name: 'instrutor_tem_local' }),
    __metadata("design:type", Array)
], Instrutor.prototype, "academias", void 0);
Instrutor = __decorate([
    (0, typeorm_1.ChildEntity)()
], Instrutor);
exports.Instrutor = Instrutor;
//# sourceMappingURL=instrutor.entity.js.map