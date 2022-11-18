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
exports.CreateCidadeDto = void 0;
const relation_entity_dto_1 = require("./../../shared/dto/relation-entity.dto");
const estado_entity_1 = require("../../estado/entities/estado.entity");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCidadeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Três Lagoas',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCidadeDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '{"id": 1}',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => relation_entity_dto_1.RelationEntityDto),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", estado_entity_1.Estado)
], CreateCidadeDto.prototype, "estado", void 0);
exports.CreateCidadeDto = CreateCidadeDto;
//# sourceMappingURL=create-cidade.dto.js.map