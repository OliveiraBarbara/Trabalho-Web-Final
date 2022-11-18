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
exports.PreferenciaExercicio = void 0;
const exercicio_entity_1 = require("./../../exercicio/entities/exercicio.entity");
const preferencia_entity_1 = require("../../preferencia/entities/preferencia.entity");
const typeorm_1 = require("typeorm");
let PreferenciaExercicio = class PreferenciaExercicio extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PreferenciaExercicio.prototype, "idPE", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => preferencia_entity_1.Preferencia, (preferencia) => preferencia.prefExercicio, {
        eager: true,
    }),
    __metadata("design:type", preferencia_entity_1.Preferencia)
], PreferenciaExercicio.prototype, "preferencia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercicio_entity_1.Exercicio, (exercicio) => exercicio.exercPref, {
        eager: true,
    }),
    __metadata("design:type", exercicio_entity_1.Exercicio)
], PreferenciaExercicio.prototype, "exercicio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PreferenciaExercicio.prototype, "intensidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PreferenciaExercicio.prototype, "qtdnaSemana", void 0);
PreferenciaExercicio = __decorate([
    (0, typeorm_1.Entity)()
], PreferenciaExercicio);
exports.PreferenciaExercicio = PreferenciaExercicio;
//# sourceMappingURL=preferencia-exercicio.entity.js.map