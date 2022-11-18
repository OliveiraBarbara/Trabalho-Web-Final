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
exports.EstadoService = void 0;
const _exceptions_1 = require("../exceptions");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const typeorm_2 = require("typeorm");
const estado_entity_1 = require("./entities/estado.entity");
let EstadoService = class EstadoService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createEstadoDto) {
        const estado = this.repository.create(createEstadoDto);
        return await this.repository.save(estado);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.where = [
                { nome: (0, typeorm_2.ILike)(`%${search}%`) },
                { sigla: (0, typeorm_2.ILike)(`%${search}%`) },
            ];
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, where);
    }
    async findOne(id) {
        const estado = await this.repository.findOneBy({ id });
        if (!estado) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return estado;
    }
    async update(id, updateEstadoDto) {
        await this.repository.update(id, updateEstadoDto);
        return this.findOne(id);
    }
    async remove(id) {
        const estado = await this.repository.delete(id);
        if (!(estado === null || estado === void 0 ? void 0 : estado.affected)) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return true;
    }
};
EstadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estado_entity_1.Estado)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EstadoService);
exports.EstadoService = EstadoService;
//# sourceMappingURL=estado.service.js.map