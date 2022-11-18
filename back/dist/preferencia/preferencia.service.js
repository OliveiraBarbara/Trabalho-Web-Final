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
exports.PreferenciaService = void 0;
const _exceptions_1 = require("../exceptions");
const preferencia_entity_1 = require("./entities/preferencia.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let PreferenciaService = class PreferenciaService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createPreferenciaDto) {
        const prefencia = this.repository.create(createPreferenciaDto);
        return this.repository.save(prefencia);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.where = [
                { material: (0, typeorm_2.ILike)(`%${search}%`) },
                { periodo: (0, typeorm_2.ILike)(`%${search}%`) },
            ];
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, where);
    }
    async findOne(idPref) {
        const preferencia = await this.repository.findOneBy({ idPref });
        if (!preferencia) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return preferencia;
    }
    async update(idPref, updatePreferenciaDto) {
        await this.repository.update(idPref, updatePreferenciaDto);
        const preferencia = await this.repository.findOneBy({ idPref });
        if (!preferencia) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return preferencia;
    }
    async remove(idPref) {
        const preferencia = await this.repository.delete({ idPref });
        if (!(preferencia === null || preferencia === void 0 ? void 0 : preferencia.affected)) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return true;
    }
};
PreferenciaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(preferencia_entity_1.Preferencia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PreferenciaService);
exports.PreferenciaService = PreferenciaService;
//# sourceMappingURL=preferencia.service.js.map