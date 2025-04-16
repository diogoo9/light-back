import { Injectable } from "@nestjs/common";
import { InvoiceRepository } from "../invoices/repository/invoices.repository";

@Injectable()
export class DashboardService {
  constructor(private dd: InvoiceRepository) {}

  findAll(start_date: Date, end_date: Date) {
    return this.dd.getStatistics(start_date?.toString(), end_date?.toString());
  }
}
