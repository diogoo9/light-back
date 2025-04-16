"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clients1743910942330 = void 0;
const typeorm_1 = require("typeorm");
class Clients1743910942330 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "clients",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                { name: "supplier", type: "varchar", isNullable: false },
                { name: "instalation_number", type: "varchar", isNullable: false },
            ],
        }));
    }
    async down(queryRunner) { }
}
exports.Clients1743910942330 = Clients1743910942330;
//# sourceMappingURL=1743910942330-clients.js.map