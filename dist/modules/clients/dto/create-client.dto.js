"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const client_entity_1 = require("../entities/client.entity");
class CreateClientDto extends (0, mapped_types_1.PartialType)(client_entity_1.Client) {
}
exports.CreateClientDto = CreateClientDto;
//# sourceMappingURL=create-client.dto.js.map