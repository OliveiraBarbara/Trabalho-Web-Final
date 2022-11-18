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
exports.CreatePreferenciaExercicioDto = void 0;
const preferencia_entity_1 = require("../../preferencia/entities/preferencia.entity");
const exercicio_entity_1 = require("./../../exercicio/entities/exercicio.entity");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const relation_entity_dto_1 = require("../../shared/dto/relation-entity.dto");
const swagger_1 = require("@nestjs/swagger");
class CreatePreferenciaExercicioDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'baixo',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePreferenciaExercicioDto.prototype, "intensidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2 vezes na semana',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreatePreferenciaExercicioDto.prototype, "qtdnaSemana", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => relation_entity_dto_1.RelationEntityDto),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", exercicio_entity_1.Exercicio)
], CreatePreferenciaExercicioDto.prototype, "exercicio", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => relation_entity_dto_1.RelationEntityDto),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", preferencia_entity_1.Preferencia)
], CreatePreferenciaExercicioDto.prototype, "preferencia", void 0);
exports.CreatePreferenciaExercicioDto = CreatePreferenciaExercicioDto;
//# sourceMappingURL=create-preferencia-exercicio.dto.js.map