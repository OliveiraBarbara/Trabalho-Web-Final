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
exports.CreateUsuarioDto = void 0;
const create_endereco_dto_1 = require("../../endereco/dto/create-endereco.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateUsuarioDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Monica da Cruz',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '21996325487',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(11),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'monica@teste.com',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Abc@123',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'senha muito fraca',
    }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "senha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '[{"rua": "Rua dos Professora", "num": 2741, "bairro": "Centro", "cep": "16601753", "cidade": {"id": 1}}]',
    }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_endereco_dto_1.CreateEnderecoDto),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateUsuarioDto.prototype, "enderecos", void 0);
exports.CreateUsuarioDto = CreateUsuarioDto;
//# sourceMappingURL=create-usuario.dto.js.map