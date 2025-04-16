import { Controller, Get, Query } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { getStatisticsDTO } from "../invoices/dto/create-invoice.dto copy";

@Controller("dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  findAll(@Query() query: getStatisticsDTO) {
    const { start_date, end_date } = query;

    return this.dashboardService.findAll(start_date, end_date);
  }
}
