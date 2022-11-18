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
exports.ExercicioController = void 0;
const common_1 = require("@nestjs/common");
const exercicio_service_1 = require("./exercicio.service");
const create_exercicio_dto_1 = require("./dto/create-exercicio.dto");
const update_exercicio_dto_1 = require("./dto/update-exercicio.dto");
const swagger_1 = require("@nestjs/swagger");
const instrutor_auth_guard_1 = require("../auth/guards/instrutor-auth.guard");
let ExercicioController = class ExercicioController {
    constructor(exercicioService) {
        this.exercicioService = exercicioService;
    }
    create(createExercicioDto) {
        return this.exercicioService.create(createExercicioDto);
    }
    findAll(page = 1, limit = 10, search) {
        return this.exercicioService.findAll({ page, limit }, search);
    }
    findOne(idExec) {
        return this.exercicioService.findOne(idExec);
    }
    update(idExec, updateExercicioDto) {
        return this.exercicioService.update(idExec, updateExercicioDto);
    }
    remove(idExec) {
        return this.exercicioService.remove(idExec);
    }
};
__decorate([
    (0, common_1.UseGuards)(instrutor_auth_guard_1.AuthGuard_Intrutor),
    (0, common_1.Post)('add-exercicio'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exercicio_dto_1.CreateExercicioDto]),
    __metadata("design:returntype", void 0)
], ExercicioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('ver-exercicio'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], ExercicioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExercicioController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(instrutor_auth_guard_1.AuthGuard_Intrutor),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_exercicio_dto_1.UpdateExercicioDto]),
    __metadata("design:returntype", void 0)
], ExercicioController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(instrutor_auth_guard_1.AuthGuard_Intrutor),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExercicioController.prototype, "remove", null);
ExercicioController = __decorate([
    (0, swagger_1.ApiTags)('exercicio'),
    (0, common_1.Controller)('exercicio/'),
    __metadata("design:paramtypes", [exercicio_service_1.ExercicioService])
], ExercicioController);
exports.ExercicioController = ExercicioController;
//# sourceMappingURL=exercicio.controller.js.map