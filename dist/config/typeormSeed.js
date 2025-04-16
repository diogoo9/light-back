"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const typeorm_2 = require("./typeorm");
const ENV = process.env.NODE_ENV;
require('dotenv').config({ path: !ENV ? '.env' : `.env.${ENV}` });
const datasource1 = new typeorm_1.DataSource({
    ...typeorm_2.defaultOptions,
    metadataTableName: 'migrations',
    migrations: ['dist/database/seeds/*{.ts,.js}'],
});
exports.default = datasource1;
//# sourceMappingURL=typeormSeed.js.map