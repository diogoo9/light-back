import { Module } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { DashboardController } from "./dashboard.controller";
import { InvoiceRepository } from "../invoices/repository/invoices.repository";

@Module({
  controllers: [DashboardController],
  providers: [DashboardService, InvoiceRepository],
})
export class DashboardModule {}
