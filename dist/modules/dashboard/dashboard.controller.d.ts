import { DashboardService } from "./dashboard.service";
import { getStatisticsDTO } from "../invoices/dto/create-invoice.dto copy";
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    findAll(query: getStatisticsDTO): Promise<{
        compensated_and_eletrical: any;
        financial_values: any;
    }>;
}
