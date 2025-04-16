import { UpdateInvoiceDto } from "./dto/update-invoice.dto";
import { ClientRepository } from "../clients/repository/client.repository";
import { InvoiceRepository } from "./repository/invoices.repository";
import { Invoice } from "./entities/invoice.entity";
export declare class InvoicesService {
    private clientRepository;
    private invoiceRepository;
    constructor(clientRepository: ClientRepository, invoiceRepository: InvoiceRepository);
    getLocationFileById(id: any): Promise<string>;
    getLineFrom(array: string[], value: string): number;
    getByLineAndSplitPosition(array: string[], line: number, splitPosition: number): string;
    create(file: any): Promise<Invoice>;
    findAll(): string;
    download(id: string): Promise<void>;
    update(id: number, updateInvoiceDto: UpdateInvoiceDto): string;
    remove(id: number): string;
    convertToAmericanValue(value: any): number;
    convertToBr(value: any): string;
}
