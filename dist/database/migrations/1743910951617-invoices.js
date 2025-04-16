"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoices1743910951617 = void 0;
const typeorm_1 = require("typeorm");
class Invoices1743910951617 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "invoices",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                },
                {
                    name: "date",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "electrical_energy_kwh",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "electrical_energy_value",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "scee_without_icms_kwh",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "scee_without_icms_value",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "compensated_energy_kwh",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "compensated_energy_value",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "municipal_public_contribution",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "eletric_consume_total",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "total_value_without_gd",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "client_id",
                    type: "varchar",
                    isNullable: false,
                    isUnique: false,
                },
                {
                    name: "location",
                    type: "varchar",
                    isNullable: false,
                    isUnique: true,
                },
            ],
            uniques: [
                new typeorm_1.TableUnique({
                    columnNames: ["date", "client_id"],
                    name: "referenceDateAndClient",
                }),
            ],
            foreignKeys: [
                {
                    name: "FK_Client",
                    columnNames: ["client_id"],
                    referencedTableName: "clients",
                    referencedColumnNames: ["id"],
                },
            ],
        }));
    }
    async down(queryRunner) { }
}
exports.Invoices1743910951617 = Invoices1743910951617;
//# sourceMappingURL=1743910951617-invoices.js.map