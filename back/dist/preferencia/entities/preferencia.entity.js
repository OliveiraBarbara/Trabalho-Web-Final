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
exports.Preferencia = void 0;
const preferencia_exercicio_entity_1 = require("./../../preferencia-exercicio/entities/preferencia-exercicio.entity");
const typeorm_1 = require("typeorm");
let Preferencia = class Preferencia {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Preferencia.prototype, "idPref", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Preferencia.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Preferencia.prototype, "periodo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => preferencia_exercicio_entity_1.PreferenciaExercicio, (prefExercicio) => prefExercicio.preferencia),
    __metadata("design:type", Array)
], Preferencia.prototype, "prefExercicio", void 0);
Preferencia = __decorate([
    (0, typeorm_1.Entity)()
], Preferencia);
exports.Preferencia = Preferencia;
//# sourceMappingURL=preferencia.entity.js.map