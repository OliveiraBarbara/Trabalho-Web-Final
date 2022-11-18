"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class RecordNotFoundException extends common_1.HttpException {
    constructor() {
        super('Record not found', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.RecordNotFoundException = RecordNotFoundException;
//# sourceMappingURL=record-not-found.exception.js.map