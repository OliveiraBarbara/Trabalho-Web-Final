"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstadoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_estado_dto_1 = require("./create-estado.dto");
class UpdateEstadoDto extends (0, swagger_1.PartialType)(create_estado_dto_1.CreateEstadoDto) {
}
exports.UpdateEstadoDto = UpdateEstadoDto;
//# sourceMappingURL=update-estado.dto.js.map