import { Injectable } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { ClientRepository } from "./repository/client.repository";
import { InvoiceRepository } from "../invoices/repository/invoices.repository";

@Injectable()
export class ClientsService {
  constructor(
    private clientRepository: ClientRepository,
    private invoiceRepository: InvoiceRepository
  ) {}
  create(createClientDto: CreateClientDto) {}

  findAll(search: string) {
    if (search) {
      return this.clientRepository.search(search);
    }
    return this.clientRepository.getAll();
  }

  findInvoices(id: string) {
    return this.invoiceRepository.getAllByClientID(id);
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
