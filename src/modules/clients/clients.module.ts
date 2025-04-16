import { Module } from "@nestjs/common";
import { ClientsService } from "./clients.service";
import { ClientsController } from "./clients.controller";
import { ClientRepository } from "./repository/client.repository";
import { InvoiceRepository } from "../invoices/repository/invoices.repository";

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, ClientRepository, InvoiceRepository],
})
export class ClientsModule {}
