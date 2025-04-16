import { InvoiceRepository } from "../invoices/repository/invoices.repository";
export declare class DashboardService {
    private dd;
    constructor(dd: InvoiceRepository);
    findAll(start_date: Date, end_date: Date): Promise<{
        compensated_and_eletrical: any;
        financial_values: any;
    }>;
}
