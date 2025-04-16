import { DataSource } from 'typeorm';
import { defaultOptions } from './typeorm';

const ENV = process.env.NODE_ENV;

require('dotenv').config({ path: !ENV ? '.env' : `.env.${ENV}` });

const datasource1 = new DataSource({
  ...defaultOptions,
  metadataTableName: 'migrations',
  migrations: ['dist/database/seeds/*{.ts,.js}'],
});
export default datasource1;
