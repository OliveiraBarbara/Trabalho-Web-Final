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
exports.LocalTreinamentoController = void 0;
const instrutor_auth_guard_1 = require("../auth/guards/instrutor-auth.guard");
const common_1 = require("@nestjs/common");
const local_treinamento_service_1 = require("./local-treinamento.service");
const create_local_treinamento_dto_1 = require("./dto/create-local-treinamento.dto");
const update_local_treinamento_dto_1 = require("./dto/update-local-treinamento.dto");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../shared/decorators");
const instrutor_entity_1 = require("../instrutor/entities/instrutor.entity");
let LocalTreinamentoController = class LocalTreinamentoController {
    constructor(localTreinamentoService) {
        this.localTreinamentoService = localTreinamentoService;
    }
    create(createLocalTreinamentoDto) {
        return this.localTreinamentoService.create(createLocalTreinamentoDto);
    }
    findAll(cliente, page = 1, limit = 10, search) {
        return this.localTreinamentoService.findAll({ page, limit }, search);
    }
    findOne(idLocal) {
        return this.localTreinamentoService.findOne(idLocal);
    }
    update(idLocal, updateLocalTreinamentoDto) {
        return this.localTreinamentoService.update(idLocal, updateLocalTreinamentoDto);
    }
    remove(idLocal) {
        return this.localTreinamentoService.remove(idLocal);
    }
};
__decorate([
    (0, common_1.Post)('add-localTreinamento'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_local_treinamento_dto_1.CreateLocalTreinamentoDto]),
    __metadata("design:returntype", void 0)
], LocalTreinamentoController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(instrutor_auth_guard_1.AuthGuard_Intrutor),
    (0, common_1.Get)('ver-localTreinamento'),
    __param(0, (0, decorators_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(3, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [instrutor_entity_1.Instrutor, Number, Number, String]),
    __metadata("design:returntype", void 0)
], LocalTreinamentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalTreinamentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_local_treinamento_dto_1.UpdateLocalTreinamentoDto]),
    __metadata("design:returntype", void 0)
], LocalTreinamentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalTreinamentoController.prototype, "remove", null);
LocalTreinamentoController = __decorate([
    (0, swagger_1.ApiTags)('local-treinamento'),
    (0, common_1.Controller)('local-treinamento/'),
    __metadata("design:paramtypes", [local_treinamento_service_1.LocalTreinamentoService])
], LocalTreinamentoController);
exports.LocalTreinamentoController = LocalTreinamentoController;
//# sourceMappingURL=local-treinamento.controller.js.map