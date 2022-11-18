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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenciaExercicioController = void 0;
const common_1 = require("@nestjs/common");
const preferencia_exercicio_service_1 = require("./preferencia-exercicio.service");
const create_preferencia_exercicio_dto_1 = require("./dto/create-preferencia-exercicio.dto");
const update_preferencia_exercicio_dto_1 = require("./dto/update-preferencia-exercicio.dto");
const swagger_1 = require("@nestjs/swagger");
const cliente_auth_guard_1 = require("../auth/guards/cliente-auth.guard");
let PreferenciaExercicioController = class PreferenciaExercicioController {
    constructor(preferenciaExercicioService) {
        this.preferenciaExercicioService = preferenciaExercicioService;
    }
    create(createPreferenciaExercicioDto) {
        return this.preferenciaExercicioService.create(createPreferenciaExercicioDto);
    }
    findAll(page = 1, limit = 10, search) {
        return this.preferenciaExercicioService.findAll({ page, limit }, search);
    }
    findOne(id) {
        return this.preferenciaExercicioService.findOne(id);
    }
    update(id, updatePreferenciaExercicioDto) {
        return this.preferenciaExercicioService.update(id, updatePreferenciaExercicioDto);
    }
    remove(id) {
        return this.preferenciaExercicioService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(cliente_auth_guard_1.AuthGuard_Cliente),
    (0, common_1.Post)('add-prefExercicio'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preferencia_exercicio_dto_1.CreatePreferenciaExercicioDto]),
    __metadata("design:returntype", void 0)
], PreferenciaExercicioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('ver-prefExercicio'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], PreferenciaExercicioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PreferenciaExercicioController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(cliente_auth_guard_1.AuthGuard_Cliente),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_preferencia_exercicio_dto_1.UpdatePreferenciaExercicioDto]),
    __metadata("design:returntype", void 0)
], PreferenciaExercicioController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(cliente_auth_guard_1.AuthGuard_Cliente),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PreferenciaExercicioController.prototype, "remove", null);
PreferenciaExercicioController = __decorate([
    (0, swagger_1.ApiTags)('preferencia-exercicio'),
    (0, common_1.Controller)('preferencia-exercicio'),
    __metadata("design:paramtypes", [preferencia_exercicio_service_1.PreferenciaExercicioService])
], PreferenciaExercicioController);
exports.PreferenciaExercicioController = PreferenciaExercicioController;
//# sourceMappingURL=preferencia-exercicio.controller.js.map