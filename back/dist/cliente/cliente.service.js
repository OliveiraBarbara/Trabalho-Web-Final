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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const preferencia_entity_1 = require("../preferencia/entities/preferencia.entity");
const _exceptions_1 = require("../exceptions");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const endereco_entity_1 = require("../endereco/entities/endereco.entity");
const typeorm_2 = require("typeorm");
const cliente_entity_1 = require("./entities/cliente.entity");
let ClienteService = class ClienteService {
    constructor(repository, enderecoRepository, preferenciaRepository) {
        this.repository = repository;
        this.enderecoRepository = enderecoRepository;
        this.preferenciaRepository = preferenciaRepository;
    }
    async create(createClienteDto) {
        var _a, _b;
        const cliente = this.repository.create(createClienteDto);
        cliente.enderecos = [];
        (_a = createClienteDto.enderecos) === null || _a === void 0 ? void 0 : _a.forEach((endereco) => {
            cliente.enderecos.push(this.enderecoRepository.create(endereco));
        });
        cliente.preferencias = [];
        (_b = createClienteDto.preferencias) === null || _b === void 0 ? void 0 : _b.forEach((preferencia) => {
            cliente.preferencias.push(this.preferenciaRepository.create(preferencia));
        });
        cliente.role = 'cliente';
        const _c = await this.repository.save(cliente), { senha } = _c, result = __rest(_c, ["senha"]);
        return result;
    }
    async createPref(cliente, preferencia) {
        cliente.preferencias.push(this.preferenciaRepository.create(preferencia));
        return await this.repository.save(cliente);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.where = [
                { nome: (0, typeorm_2.ILike)(`%${search}`) },
                { cpf: (0, typeorm_2.ILike)(`%${search}`) },
            ];
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, where);
    }
    async findOne(id) {
        const cliente = await this.repository.findOneBy({ id });
        if (!cliente) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return cliente;
    }
    async update(id, updateClienteDto) {
        const { enderecos, preferencias } = updateClienteDto, dadosUpdate = __rest(updateClienteDto, ["enderecos", "preferencias"]);
        await this.repository.update(id, dadosUpdate);
        const cliente = await this.repository.findOneBy({ id });
        for (let index = 0; index < cliente.enderecos.length; index++) {
            this.enderecoRepository.update(cliente.enderecos[index].id, enderecos[index]);
        }
        if (!cliente) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return cliente;
    }
    async remove(id) {
        const cliente = await this.repository.delete(id);
        if (!(cliente === null || cliente === void 0 ? void 0 : cliente.affected)) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return true;
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __param(1, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __param(2, (0, typeorm_1.InjectRepository)(preferencia_entity_1.Preferencia)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map