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
exports.AdminService = void 0;
const _exceptions_1 = require("../exceptions");
const admin_entity_1 = require("./entities/admin.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const endereco_entity_1 = require("../endereco/entities/endereco.entity");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let AdminService = class AdminService {
    constructor(repository, enderecoRepository) {
        this.repository = repository;
        this.enderecoRepository = enderecoRepository;
    }
    async create(createAdminDto) {
        const admin = this.repository.create(createAdminDto);
        admin.enderecos = [];
        createAdminDto.enderecos.forEach((endereco) => {
            admin.enderecos.push(this.enderecoRepository.create(endereco));
        });
        admin.role = 'admin';
        const _a = await this.repository.save(admin), { senha } = _a, result = __rest(_a, ["senha"]);
        return result;
    }
    findAll(options, search) {
        const where = {};
        if (search) {
            where.nome = (0, typeorm_2.ILike)(`%${search}`);
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(this.repository, options, { where });
    }
    async findOne(id) {
        const admin = await this.repository.findOneBy({ id });
        if (!admin) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return admin;
    }
    async update(id, updateAdminDto) {
        const { enderecos } = updateAdminDto, dadosUpdate = __rest(updateAdminDto, ["enderecos"]);
        await this.repository.update(id, dadosUpdate);
        const admin = await this.repository.findOneBy({ id });
        for (let index = 0; index < admin.enderecos.length; index++) {
            this.enderecoRepository.update(admin.enderecos[index].id, enderecos[index]);
        }
        if (!admin) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return admin;
    }
    async remove(id) {
        const admin = await this.repository.delete(id);
        if (!(admin === null || admin === void 0 ? void 0 : admin.affected)) {
            throw new _exceptions_1.RecordNotFoundException();
        }
        return true;
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __param(1, (0, typeorm_1.InjectRepository)(endereco_entity_1.Endereco)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map