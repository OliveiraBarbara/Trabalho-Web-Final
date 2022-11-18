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
exports.EstadoController = void 0;
const common_1 = require("@nestjs/common");
const estado_service_1 = require("./estado.service");
const create_estado_dto_1 = require("./dto/create-estado.dto");
const update_estado_dto_1 = require("./dto/update-estado.dto");
const swagger_1 = require("@nestjs/swagger");
const admin_auth_guard_1 = require("../auth/guards/admin-auth.guard");
let EstadoController = class EstadoController {
    constructor(estadoService) {
        this.estadoService = estadoService;
    }
    create(createEstadoDto) {
        return this.estadoService.create(createEstadoDto);
    }
    findAll(page = 1, limit = 10, search) {
        return this.estadoService.findAll({ page, limit }, search);
    }
    findOne(id) {
        return this.estadoService.findOne(id);
    }
    update(id, updateEstadoDto) {
        return this.estadoService.update(id, updateEstadoDto);
    }
    remove(id) {
        return this.estadoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)('add-estado'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estado_dto_1.CreateEstadoDto]),
    __metadata("design:returntype", void 0)
], EstadoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('ver-estado'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], EstadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EstadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_estado_dto_1.UpdateEstadoDto]),
    __metadata("design:returntype", void 0)
], EstadoController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AuthGuard_Admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EstadoController.prototype, "remove", null);
EstadoController = __decorate([
    (0, swagger_1.ApiTags)('estado'),
    (0, common_1.Controller)('estado/'),
    __metadata("design:paramtypes", [estado_service_1.EstadoService])
], EstadoController);
exports.EstadoController = EstadoController;
//# sourceMappingURL=estado.controller.js.map