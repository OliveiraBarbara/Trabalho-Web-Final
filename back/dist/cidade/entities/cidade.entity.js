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
exports.Cidade = void 0;
const estado_entity_1 = require("../../estado/entities/estado.entity");
const entities_1 = require("../../shared/entities");
const typeorm_1 = require("typeorm");
let Cidade = class Cidade extends entities_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cidade.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_entity_1.Estado, (estado) => estado.cidades, { eager: true }),
    __metadata("design:type", estado_entity_1.Estado)
], Cidade.prototype, "estado", void 0);
Cidade = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['nome', 'estado'])
], Cidade);
exports.Cidade = Cidade;
//# sourceMappingURL=cidade.entity.js.map