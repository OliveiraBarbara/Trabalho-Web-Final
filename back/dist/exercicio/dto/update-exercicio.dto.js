"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExercicioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_exercicio_dto_1 = require("./create-exercicio.dto");
class UpdateExercicioDto extends (0, mapped_types_1.PartialType)(create_exercicio_dto_1.CreateExercicioDto) {
}
exports.UpdateExercicioDto = UpdateExercicioDto;
//# sourceMappingURL=update-exercicio.dto.js.map