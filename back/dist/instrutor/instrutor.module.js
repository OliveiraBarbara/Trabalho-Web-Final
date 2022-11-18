"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrutorModule = void 0;
const local_treinamento_module_1 = require("./../local-treinamento/local-treinamento.module");
const exercicio_module_1 = require("./../exercicio/exercicio.module");
const endereco_module_1 = require("../endereco/endereco.module");
const instrutor_entity_1 = require("./entities/instrutor.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const instrutor_service_1 = require("./instrutor.service");
const instrutor_controller_1 = require("./instrutor.controller");
let InstrutorModule = class InstrutorModule {
};
InstrutorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([instrutor_entity_1.Instrutor]),
            (0, common_1.forwardRef)(() => endereco_module_1.EnderecoModule),
            (0, common_1.forwardRef)(() => exercicio_module_1.ExercicioModule),
            (0, common_1.forwardRef)(() => local_treinamento_module_1.LocalTreinamentoModule),
        ],
        controllers: [instrutor_controller_1.InstrutorController],
        providers: [instrutor_service_1.InstrutorService],
        exports: [typeorm_1.TypeOrmModule],
    })
], InstrutorModule);
exports.InstrutorModule = InstrutorModule;
//# sourceMappingURL=instrutor.module.js.map