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
exports.Exercicio = void 0;
const preferencia_exercicio_entity_1 = require("../../preferencia-exercicio/entities/preferencia-exercicio.entity");
const typeorm_1 = require("typeorm");
let Exercicio = class Exercicio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Exercicio.prototype, "idExec", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exercicio.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exercicio.prototype, "tempoExec", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => preferencia_exercicio_entity_1.PreferenciaExercicio, (prefExercicio) => prefExercicio.exercicio),
    __metadata("design:type", Array)
], Exercicio.prototype, "exercPref", void 0);
Exercicio = __decorate([
    (0, typeorm_1.Entity)()
], Exercicio);
exports.Exercicio = Exercicio;
//# sourceMappingURL=exercicio.entity.js.map