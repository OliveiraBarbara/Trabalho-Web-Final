"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenciaExercicioModule = void 0;
const preferencia_exercicio_entity_1 = require("./entities/preferencia-exercicio.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const preferencia_exercicio_service_1 = require("./preferencia-exercicio.service");
const preferencia_exercicio_controller_1 = require("./preferencia-exercicio.controller");
let PreferenciaExercicioModule = class PreferenciaExercicioModule {
};
PreferenciaExercicioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([preferencia_exercicio_entity_1.PreferenciaExercicio])],
        controllers: [preferencia_exercicio_controller_1.PreferenciaExercicioController],
        providers: [preferencia_exercicio_service_1.PreferenciaExercicioService],
        exports: [typeorm_1.TypeOrmModule],
    })
], PreferenciaExercicioModule);
exports.PreferenciaExercicioModule = PreferenciaExercicioModule;
//# sourceMappingURL=preferencia-exercicio.module.js.map