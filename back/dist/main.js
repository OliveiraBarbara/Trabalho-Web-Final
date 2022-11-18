"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        exceptionFactory: (validationErrors = []) => {
            return new common_1.BadRequestException(validationErrors);
        },
    }));
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Documentação com Swagger - Anelise e Bárbara')
        .setDescription('RUNMAZING - SITE PARA PARCERIA DE ATIVIDADE FÍSICA. O Swagger (aka OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks. Ela gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.')
        .setVersion('1.0')
        .addTag('cliente')
        .addTag('instrutor')
        .addTag('admin')
        .addTag('cidade')
        .addTag('estado')
        .addTag('local-treinamento')
        .addTag('exercicio')
        .addTag('preferencia')
        .addTag('preferencia-exercicio')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map