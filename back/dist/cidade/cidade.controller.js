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
exports.CidadeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_auth_guard_1 = require("../auth/guards/admin-auth.guard");
const cidade_service_1 = require("./cidade.service");
const create_cidade_dto_1 = require("./dto/create-cidade.dto");
const update_cidade_dto_1 = require("./dto/update-cidade.dto");
let CidadeController = class CidadeController {
    constructor(cidadeService) {
        this.cidadeService = cidadeService;
    }
    create(createCidadeDto) {
        return this.cidadeService.create(createCidadeDto);
    }
    findAll(page = 1, limit = 10, search) {
        return this.cidadeService.findAll({ page, limit }, search);
    }
    findOne(id) {
        return this.cidadeService.findOne(id);
    }
    update(id, updateCidadeDto) {
        return this.cidadeService.update(id, updateCidadeDto);
    }
    remove(id) {
        return this.cidadeService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AuthGuard_Admin),
    (0, common_1.Post)('add-cidade'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cidade_dto_1.CreateCidadeDto]),
    __metadata("design:returntype", void 0)
], CidadeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('ver-cidade'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], CidadeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CidadeController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AuthGuard_Admin),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cidade_dto_1.UpdateCidadeDto]),
    __metadata("design:returntype", void 0)
], CidadeController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AuthGuard_Admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CidadeController.prototype, "remove", null);
CidadeController = __decorate([
    (0, swagger_1.ApiTags)('cidade'),
    (0, common_1.Controller)('cidade/'),
    __metadata("design:paramtypes", [cidade_service_1.CidadeService])
], CidadeController);
exports.CidadeController = CidadeController;
//# sourceMappingURL=cidade.controller.js.map