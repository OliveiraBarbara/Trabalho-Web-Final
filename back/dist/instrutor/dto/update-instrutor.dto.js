"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInstrutorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_instrutor_dto_1 = require("./create-instrutor.dto");
class UpdateInstrutorDto extends (0, swagger_1.PartialType)(create_instrutor_dto_1.CreateInstrutorDto) {
}
exports.UpdateInstrutorDto = UpdateInstrutorDto;
//# sourceMappingURL=update-instrutor.dto.js.map