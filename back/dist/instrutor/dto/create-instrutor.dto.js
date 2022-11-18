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
exports.CreateInstrutorDto = void 0;
const create_exercicio_dto_1 = require("./../../exercicio/dto/create-exercicio.dto");
const create_local_treinamento_dto_1 = require("./../../local-treinamento/dto/create-local-treinamento.dto");
const class_validator_1 = require("class-validator");
const create_usuario_dto_1 = require("./../../usuario/dto/create-usuario.dto");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateInstrutorDto extends create_usuario_dto_1.CreateUsuarioDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 123456,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateInstrutorDto.prototype, "cref", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Esporte de Quadra',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateInstrutorDto.prototype, "modalidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[{"tipo": "Vôlei", "tempoExec": "3 horas"}]',
    }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_exercicio_dto_1.CreateExercicioDto),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateInstrutorDto.prototype, "exercicios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[{"nome": "Pime", "valor": "120.00", "horaFunc": "5h às 22h"}]',
    }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_local_treinamento_dto_1.CreateLocalTreinamentoDto),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateInstrutorDto.prototype, "academias", void 0);
exports.CreateInstrutorDto = CreateInstrutorDto;
//# sourceMappingURL=create-instrutor.dto.js.map