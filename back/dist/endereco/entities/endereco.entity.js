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
exports.Endereco = void 0;
const cidade_entity_1 = require("../../cidade/entities/cidade.entity");
const entities_1 = require("../../shared/entities");
const typeorm_1 = require("typeorm");
let Endereco = class Endereco extends entities_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "rua", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Endereco.prototype, "num", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Endereco.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidade_entity_1.Cidade, { eager: true }),
    __metadata("design:type", cidade_entity_1.Cidade)
], Endereco.prototype, "cidade", void 0);
Endereco = __decorate([
    (0, typeorm_1.Entity)()
], Endereco);
exports.Endereco = Endereco;
//# sourceMappingURL=endereco.entity.js.map