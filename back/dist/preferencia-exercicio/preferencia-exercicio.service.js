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
exports.PreferenciaExercicioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const record_not_found_exception_1 = require("../exceptions/record-not-found.exception");
const preferencia_exercicio_entity_1 = require("./entities/preferencia-exercicio.entity");
let PreferenciaExercicioService = class PreferenciaExercicioService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createPreferenciaExercicioDto) {
        const prefexec = this.repository.create(createPreferenciaExercicioDto);
        return this.repository.save(prefexec);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.intensidade = (0, typeorm_2.ILike)(`%${search}`);
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, { where });
    }
    async findOne(idPE) {
        const prefexec = await this.repository.findOneBy({ idPE });
        if (!prefexec) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return prefexec;
    }
    async update(idPE, updatePreferenciaExercicioDto) {
        await this.repository.update(idPE, updatePreferenciaExercicioDto);
        const prefexec = await this.repository.findOneBy({ idPE });
        if (!prefexec) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return prefexec;
    }
    async remove(idPE) {
        const prefexec = await this.repository.delete(idPE);
        if (!(prefexec === null || prefexec === void 0 ? void 0 : prefexec.affected)) {
            throw new record_not_found_exception_1.RecordNotFoundException();
        }
        return true;
    }
};
PreferenciaExercicioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(preferencia_exercicio_entity_1.PreferenciaExercicio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PreferenciaExercicioService);
exports.PreferenciaExercicioService = PreferenciaExercicioService;
//# sourceMappingURL=preferencia-exercicio.service.js.map