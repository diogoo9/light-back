import { DataSource, Repository } from "typeorm";
import { Invoice } from "../entities/invoice.entity";
import { CreateInvoiceDto } from "../dto/create-invoice.dto";
export declare class InvoiceRepository extends Repository<Invoice> {
    constructor(dataSource: DataSource);
    getStatistics(start_date?: string, end_date?: string): Promise<{
        compensated_and_eletrical: any;
        financial_values: any;
    }>;
    getById(id: string): Promise<Invoice>;
    createInvoice(data: CreateInvoiceDto): Promise<Invoice>;
    getAll(): Promise<Invoice[]>;
    getAllByClientID(clientId: string): Promise<Invoice[]>;
    getByDate(date: string, client_id: string): Promise<Invoice>;
}
