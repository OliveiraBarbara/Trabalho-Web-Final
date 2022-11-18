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
exports.LocalTreinamentoService = void 0;
const local_treinamento_entity_1 = require("./entities/local-treinamento.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const _exceptions_1 = require("../exceptions");
const endereco_entity_1 = require("../endereco/entities/endereco.entity");
let LocalTreinamentoService = class LocalTreinamentoService {
    constructor(repository, enderecoRepository) {
        this.repository = repository;
        this.enderecoRepository = enderecoRepository;
    }
    create(createLocalTreinamentoDto) {
        const local = this.repository.create(createLocalTreinamentoDto);
        return this.repository.save(local);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.horaFunc = (0, typeorm_2.ILike)(`%${search}`);
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, { where });
    }
    async findOne(idLocal) {
        const local = await this.repository.findOneBy({ idLocal });
        if (!local) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return local;
    }
    async update(idLocal, updateLocalTreinamentoDto) {
        await this.repository.update(idLocal, updateLocalTreinamentoDto);
        const local = await this.repository.findOneBy({ idLocal });
        if (!local) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return local;
    }
    async remove(idLocal) {
        const local = await this.repository.delete({ idLocal });
        if (!(local === null || local === void 0 ? void 0 : local.affected)) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return true;
    }
};
LocalTreinamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(local_treinamento_entity_1.LocalTreinamento)),
    __param(1, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LocalTreinamentoService);
exports.LocalTreinamentoService = LocalTreinamentoService;
//# sourceMappingURL=local-treinamento.service.js.map