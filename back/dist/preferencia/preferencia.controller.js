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
exports.PreferenciaController = void 0;
const common_1 = require("@nestjs/common");
const preferencia_service_1 = require("./preferencia.service");
const create_preferencia_dto_1 = require("./dto/create-preferencia.dto");
const update_preferencia_dto_1 = require("./dto/update-preferencia.dto");
const swagger_1 = require("@nestjs/swagger");
const cliente_auth_guard_1 = require("../auth/guards/cliente-auth.guard");
let PreferenciaController = class PreferenciaController {
    constructor(preferenciaService) {
        this.preferenciaService = preferenciaService;
    }
    create(createPreferenciaDto) {
        return this.preferenciaService.create(createPreferenciaDto);
    }
    findAll(page = 1, limit = 10, search) {
        return this.preferenciaService.findAll({ page, limit }, search);
    }
    findOne(idPref) {
        return this.preferenciaService.findOne(idPref);
    }
    update(idPref, updatePreferenciaDto) {
        return this.preferenciaService.update(idPref, updatePreferenciaDto);
    }
    remove(idPref) {
        return this.preferenciaService.remove(idPref);
    }
};
__decorate([
    (0, common_1.UseGuards)(cliente_auth_guard_1.AuthGuard_Cliente),
    (0, common_1.Post)('add-preferencia'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preferencia_dto_1.CreatePreferenciaDto]),
    __metadata("design:returntype", void 0)
], PreferenciaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('ver-preferencia'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], PreferenciaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PreferenciaController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(cliente_auth_guard_1.AuthGuard_Cliente),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_preferencia_dto_1.UpdatePreferenciaDto]),
    __metadata("design:returntype", void 0)
], PreferenciaController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(cliente_auth_guard_1.AuthGuard_Cliente),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PreferenciaController.prototype, "remove", null);
PreferenciaController = __decorate([
    (0, swagger_1.ApiTags)('preferencia'),
    (0, common_1.Controller)('preferencia/'),
    __metadata("design:paramtypes", [preferencia_service_1.PreferenciaService])
], PreferenciaController);
exports.PreferenciaController = PreferenciaController;
//# sourceMappingURL=preferencia.controller.js.map