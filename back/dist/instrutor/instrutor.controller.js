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
exports.InstrutorController = void 0;
const create_local_treinamento_dto_1 = require("./../local-treinamento/dto/create-local-treinamento.dto");
const create_exercicio_dto_1 = require("./../exercicio/dto/create-exercicio.dto");
const common_1 = require("@nestjs/common");
const instrutor_service_1 = require("./instrutor.service");
const create_instrutor_dto_1 = require("./dto/create-instrutor.dto");
const update_instrutor_dto_1 = require("./dto/update-instrutor.dto");
const swagger_1 = require("@nestjs/swagger");
const instrutor_entity_1 = require("./entities/instrutor.entity");
const decorators_1 = require("../shared/decorators");
let InstrutorController = class InstrutorController {
    constructor(instrutorService) {
        this.instrutorService = instrutorService;
    }
    create(createInstrutorDto) {
        return this.instrutorService.create(createInstrutorDto);
    }
    createPref(cliente, exercicio) {
        return this.instrutorService.createExercicio(cliente, exercicio);
    }
    createLocal(cliente, local) {
        return this.instrutorService.createLocal(cliente, local);
    }
    findAll(page = 1, limit = 10, search) {
        return this.instrutorService.findAll({ page, limit }, search);
    }
    findOne(id) {
        return this.instrutorService.findOne(id);
    }
    update(id, updateInstrutorDto) {
        return this.instrutorService.update(id, updateInstrutorDto);
    }
    remove(id) {
        return this.instrutorService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)('add-instrutor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instrutor_dto_1.CreateInstrutorDto]),
    __metadata("design:returntype", void 0)
], InstrutorController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('add-exercicio'),
    __param(0, (0, decorators_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [instrutor_entity_1.Instrutor,
        create_exercicio_dto_1.CreateExercicioDto]),
    __metadata("design:returntype", void 0)
], InstrutorController.prototype, "createPref", null);
__decorate([
    (0, common_1.Post)('add-local'),
    __param(0, (0, decorators_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [instrutor_entity_1.Instrutor,
        create_local_treinamento_dto_1.CreateLocalTreinamentoDto]),
    __metadata("design:returntype", void 0)
], InstrutorController.prototype, "createLocal", null);
__decorate([
    (0, common_1.Get)('ver-instrutor'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], InstrutorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InstrutorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_instrutor_dto_1.UpdateInstrutorDto]),
    __metadata("design:returntype", void 0)
], InstrutorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InstrutorController.prototype, "remove", null);
InstrutorController = __decorate([
    (0, swagger_1.ApiTags)('instrutor'),
    (0, common_1.Controller)('instrutor/'),
    __metadata("design:paramtypes", [instrutor_service_1.InstrutorService])
], InstrutorController);
exports.InstrutorController = InstrutorController;
//# sourceMappingURL=instrutor.controller.js.map