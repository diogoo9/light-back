import { DataSource, DataSourceOptions } from 'typeorm';

const ENV = process.env.NODE_ENV;

require('dotenv').config({ path: !ENV ? '.env' : `.env.${ENV}` });

export const defaultOptions: DataSourceOptions = {
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

const dataSource: DataSource = new DataSource(defaultOptions);
export default dataSource;
