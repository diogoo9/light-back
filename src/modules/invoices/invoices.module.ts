import { Module } from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import { InvoicesController } from "./invoices.controller";
import { InvoiceRepository } from "./repository/invoices.repository";
import { ClientRepository } from "../clients/repository/client.repository";

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService, InvoiceRepository, ClientRepository],
})
export class InvoicesModule {}
