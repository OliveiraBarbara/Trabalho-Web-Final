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
exports.InstrutorService = void 0;
const _exceptions_1 = require("../exceptions");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const endereco_entity_1 = require("../endereco/entities/endereco.entity");
const exercicio_entity_1 = require("../exercicio/entities/exercicio.entity");
const local_treinamento_entity_1 = require("../local-treinamento/entities/local-treinamento.entity");
const typeorm_2 = require("typeorm");
const instrutor_entity_1 = require("./entities/instrutor.entity");
let InstrutorService = class InstrutorService {
    constructor(repository, enderecoRepository, exercicioRepository, localRepository) {
        this.repository = repository;
        this.enderecoRepository = enderecoRepository;
        this.exercicioRepository = exercicioRepository;
        this.localRepository = localRepository;
    }
    async create(createInstrutorDto) {
        var _a, _b, _c;
        const instrutor = this.repository.create(createInstrutorDto);
        instrutor.enderecos = [];
        (_a = createInstrutorDto.enderecos) === null || _a === void 0 ? void 0 : _a.forEach((endereco) => {
            instrutor.enderecos.push(this.enderecoRepository.create(endereco));
        });
        instrutor.exercicios = [];
        (_b = createInstrutorDto.exercicios) === null || _b === void 0 ? void 0 : _b.forEach(async (exercicio) => {
            instrutor.exercicios.push(await this.exercicioRepository.create(exercicio));
        });
        instrutor.academias = [];
        (_c = createInstrutorDto.academias) === null || _c === void 0 ? void 0 : _c.forEach((academia) => {
            instrutor.academias.push(this.localRepository.create(academia));
        });
        instrutor.role = 'instrutor';
        const _d = await this.repository.save(instrutor), { senha } = _d, result = __rest(_d, ["senha"]);
        return result;
    }
    async createExercicio(instrutor, exercicio) {
        instrutor.exercicios.push(this.exercicioRepository.create(exercicio));
        return await this.repository.save(instrutor);
    }
    async createLocal(instrutor, local) {
        instrutor.academias.push(this.localRepository.create(local));
        return await this.repository.save(instrutor);
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.where = [
                { nome: (0, typeorm_2.ILike)(`%${search}%`) },
                { modalidade: (0, typeorm_2.ILike)(`%${search}%`) },
            ];
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, where);
    }
    async findOne(id) {
        const instrutor = await this.repository.findOneBy({ id });
        if (!instrutor) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return instrutor;
    }
    async update(id, updateInstrutorDto) {
        const { enderecos, exercicios, academias } = updateInstrutorDto, dadosUpdate = __rest(updateInstrutorDto, ["enderecos", "exercicios", "academias"]);
        await this.repository.update(id, dadosUpdate);
        const instrutor = await this.repository.findOneBy({ id });
        for (let index = 0; index < instrutor.enderecos.length; index++) {
            this.enderecoRepository.update(instrutor.enderecos[index].id, instrutor[index]);
        }
        if (!instrutor) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return instrutor;
    }
    async remove(id) {
        const instrutor = await this.repository.delete(id);
        if (!(instrutor === null || instrutor === void 0 ? void 0 : instrutor.affected)) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return true;
    }
};
InstrutorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instrutor_entity_1.Instrutor)),
    __param(1, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __param(2, (0, typeorm_1.InjectRepository)(exercicio_entity_1.Exercicio)),
    __param(3, (0, typeorm_1.InjectRepository)(local_treinamento_entity_1.LocalTreinamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], InstrutorService);
exports.InstrutorService = InstrutorService;
//# sourceMappingURL=instrutor.service.js.map