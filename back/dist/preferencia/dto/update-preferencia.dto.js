"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePreferenciaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_preferencia_dto_1 = require("./create-preferencia.dto");
class UpdatePreferenciaDto extends (0, mapped_types_1.PartialType)(create_preferencia_dto_1.CreatePreferenciaDto) {
}
exports.UpdatePreferenciaDto = UpdatePreferenciaDto;
//# sourceMappingURL=update-preferencia.dto.js.map