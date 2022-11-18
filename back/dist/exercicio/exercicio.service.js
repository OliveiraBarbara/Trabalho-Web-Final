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
exports.ExercicioService = void 0;
const _exceptions_1 = require("../exceptions");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const exercicio_entity_1 = require("./entities/exercicio.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ExercicioService = class ExercicioService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createExercicioDto) {
        const exercicio = this.repository.create(createExercicioDto);
        return this.repository.save(exercicio);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.where = [
                { tipo: (0, typeorm_1.ILike)(`%${search}%`) },
                { tempoExec: (0, typeorm_1.ILike)(`%${search}%`) },
            ];
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, where);
    }
    async findOne(idExec) {
        const exercicio = await this.repository.findOneBy({ idExec });
        if (!exercicio) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return exercicio;
    }
    async update(idExec, updateExercicioDto) {
        await this.repository.update(idExec, updateExercicioDto);
        const exercicio = await this.repository.findOneBy({ idExec });
        if (!exercicio) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return exercicio;
    }
    async remove(idExec) {
        const exercicio = await this.repository.delete(idExec);
        if (!(exercicio === null || exercicio === void 0 ? void 0 : exercicio.affected)) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return true;
    }
};
ExercicioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(exercicio_entity_1.Exercicio)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ExercicioService);
exports.ExercicioService = ExercicioService;
//# sourceMappingURL=exercicio.service.js.map