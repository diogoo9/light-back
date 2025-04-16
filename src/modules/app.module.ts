import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config as dotenvConfig } from "dotenv";
import { InvoicesModule } from "./invoices/invoices.module";
import { ClientsModule } from "./clients/clients.module";
import { DashboardModule } from './dashboard/dashboard.module';

dotenvConfig({ path: ".env" });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: String(process.env.DB_USER),
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      entities: ["dist/**/*.entity{.ts,.js}"],
      migrations: ["dist/database/migrations/*{.ts,.js}"],
      logging: true,
    }),
    InvoicesModule,
    ClientsModule,
    DashboardModule,
  ],
})
export class AppModule {}
