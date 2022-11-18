"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidadeModule = void 0;
const common_1 = require("@nestjs/common");
const cidade_service_1 = require("./cidade.service");
const cidade_controller_1 = require("./cidade.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cidade_entity_1 = require("./entities/cidade.entity");
let CidadeModule = class CidadeModule {
};
CidadeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cidade_entity_1.Cidade])],
        controllers: [cidade_controller_1.CidadeController],
        providers: [cidade_service_1.CidadeService],
        exports: [typeorm_1.TypeOrmModule],
    })
], CidadeModule);
exports.CidadeModule = CidadeModule;
//# sourceMappingURL=cidade.module.js.map