"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const local_treinamento_module_1 = require("./local-treinamento/local-treinamento.module");
const local_treinamento_entity_1 = require("./local-treinamento/entities/local-treinamento.entity");
const preferencia_exercicio_entity_1 = require("./preferencia-exercicio/entities/preferencia-exercicio.entity");
const preferencia_entity_1 = require("./preferencia/entities/preferencia.entity");
const preferencia_exercicio_module_1 = require("./preferencia-exercicio/preferencia-exercicio.module");
const preferencia_module_1 = require("./preferencia/preferencia.module");
const instrutor_entity_1 = require("./instrutor/entities/instrutor.entity");
const instrutor_module_1 = require("./instrutor/instrutor.module");
const usuario_module_1 = require("./usuario/usuario.module");
const cidade_entity_1 = require("./cidade/entities/cidade.entity");
const estado_entity_1 = require("./estado/entities/estado.entity");
const endereco_entity_1 = require("./endereco/entities/endereco.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_module_1 = require("./admin/admin.module");
const cliente_module_1 = require("./cliente/cliente.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./auth/guards/jwt-auth.guard");
const estado_module_1 = require("./estado/estado.module");
const cidade_module_1 = require("./cidade/cidade.module");
const endereco_module_1 = require("./endereco/endereco.module");
const cliente_entity_1 = require("./cliente/entities/cliente.entity");
const admin_entity_1 = require("./admin/entities/admin.entity");
const usuario_entity_1 = require("./usuario/entities/usuario.entity");
const exercicio_entity_1 = require("./exercicio/entities/exercicio.entity");
const exercicio_module_1 = require("./exercicio/exercicio.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'database/site.db',
                entities: [
                    cliente_entity_1.Cliente,
                    admin_entity_1.Admin,
                    instrutor_entity_1.Instrutor,
                    endereco_entity_1.Endereco,
                    estado_entity_1.Estado,
                    cidade_entity_1.Cidade,
                    usuario_entity_1.Usuario,
                    exercicio_entity_1.Exercicio,
                    preferencia_entity_1.Preferencia,
                    preferencia_exercicio_entity_1.PreferenciaExercicio,
                    local_treinamento_entity_1.LocalTreinamento,
                ],
                synchronize: true,
            }),
            estado_module_1.EstadoModule,
            cidade_module_1.CidadeModule,
            endereco_module_1.EnderecoModule,
            cliente_module_1.ClienteModule,
            admin_module_1.AdminModule,
            instrutor_module_1.InstrutorModule,
            usuario_module_1.UsuarioModule,
            exercicio_module_1.ExercicioModule,
            preferencia_module_1.PreferenciaModule,
            preferencia_exercicio_module_1.PreferenciaExercicioModule,
            local_treinamento_module_1.LocalTreinamentoModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [{ provide: core_1.APP_GUARD, useClass: jwt_auth_guard_1.JwtAuthGuard }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map