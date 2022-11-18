"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalTreinamentoModule = void 0;
const endereco_module_1 = require("../endereco/endereco.module");
const local_treinamento_entity_1 = require("./entities/local-treinamento.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const local_treinamento_service_1 = require("./local-treinamento.service");
const local_treinamento_controller_1 = require("./local-treinamento.controller");
let LocalTreinamentoModule = class LocalTreinamentoModule {
};
LocalTreinamentoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([local_treinamento_entity_1.LocalTreinamento]),
            (0, common_1.forwardRef)(() => endereco_module_1.EnderecoModule),
        ],
        controllers: [local_treinamento_controller_1.LocalTreinamentoController],
        providers: [local_treinamento_service_1.LocalTreinamentoService],
        exports: [typeorm_1.TypeOrmModule, local_treinamento_service_1.LocalTreinamentoService],
    })
], LocalTreinamentoModule);
exports.LocalTreinamentoModule = LocalTreinamentoModule;
//# sourceMappingURL=local-treinamento.module.js.map