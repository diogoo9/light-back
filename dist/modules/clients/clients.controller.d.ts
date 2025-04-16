import { ClientsService } from "./clients.service";
import { CreateClientDto } from "./dto/create-client.dto";
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): void;
    findAll(search: string): Promise<import("./entities/client.entity").Client[]>;
    findInvoicesByClientId(id: any): Promise<import("../invoices/entities/invoice.entity").Invoice[]>;
}
