import { Invoice } from "src/modules/invoices/entities/invoice.entity";
export declare class Client {
    id: string;
    name: string;
    supplier: string;
    instalation_number: string;
    invoices: Invoice[];
}
