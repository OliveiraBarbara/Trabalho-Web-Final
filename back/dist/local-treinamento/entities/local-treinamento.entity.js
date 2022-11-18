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
exports.LocalTreinamento = void 0;
const endereco_entity_1 = require("../../endereco/entities/endereco.entity");
const typeorm_1 = require("typeorm");
let LocalTreinamento = class LocalTreinamento {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LocalTreinamento.prototype, "idLocal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LocalTreinamento.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LocalTreinamento.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LocalTreinamento.prototype, "horaFunc", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => endereco_entity_1.Endereco, {
        cascade: true,
        orphanedRowAction: 'delete',
        eager: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)({ name: 'academia_tem_endereco' }),
    __metadata("design:type", endereco_entity_1.Endereco)
], LocalTreinamento.prototype, "enderecos", void 0);
LocalTreinamento = __decorate([
    (0, typeorm_1.Entity)()
], LocalTreinamento);
exports.LocalTreinamento = LocalTreinamento;
//# sourceMappingURL=local-treinamento.entity.js.map