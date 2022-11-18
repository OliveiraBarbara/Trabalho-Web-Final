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
exports.EnderecoService = void 0;
const endereco_entity_1 = require("./entities/endereco.entity");
const common_1 = require("@nestjs/common");
const _exceptions_1 = require("../exceptions");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const typeorm_2 = require("typeorm");
let EnderecoService = class EnderecoService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createEnderecoDto) {
        const endereco = this.repository.create(createEnderecoDto);
        return this.repository.save(endereco);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.where = [
                { rua: (0, typeorm_2.ILike)(`%${search}%`) },
                { bairro: (0, typeorm_2.ILike)(`%${search}`) },
                { cep: (0, typeorm_2.ILike)(`%${search}`) },
            ];
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, where);
    }
    async findOne(id) {
        const endereco = await this.repository.findOneBy({ id });
        if (!endereco) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return endereco;
    }
    update(id, updateEnderecoDto) {
        return `This action updates a #${id} endereco`;
    }
    async remove(id) {
        const end = await this.repository.delete(id);
        if (!(end === null || end === void 0 ? void 0 : end.affected)) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return true;
    }
};
EnderecoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EnderecoService);
exports.EnderecoService = EnderecoService;
//# sourceMappingURL=endereco.service.js.map