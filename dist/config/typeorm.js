"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = void 0;
const typeorm_1 = require("typeorm");
const ENV = process.env.NODE_ENV;
require('dotenv').config({ path: !ENV ? '.env' : `.env.${ENV}` });
exports.defaultOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USER),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/database/migrations/*{.ts,.js}'],
    logging: 'all',
    synchronize: false,
    logger: 'debug',
};
const dataSource = new typeorm_1.DataSource(exports.defaultOptions);
exports.default = dataSource;
//# sourceMappingURL=typeorm.js.map