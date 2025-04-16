import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { ClientRepository } from "./repository/client.repository";
import { InvoiceRepository } from "../invoices/repository/invoices.repository";
export declare class ClientsService {
    private clientRepository;
    private invoiceRepository;
    constructor(clientRepository: ClientRepository, invoiceRepository: InvoiceRepository);
    create(createClientDto: CreateClientDto): void;
    findAll(search: string): Promise<import("./entities/client.entity").Client[]>;
    findInvoices(id: string): Promise<import("../invoices/entities/invoice.entity").Invoice[]>;
    update(id: number, updateClientDto: UpdateClientDto): string;
    remove(id: number): string;
}
