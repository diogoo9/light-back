import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Clients1743910942330 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
