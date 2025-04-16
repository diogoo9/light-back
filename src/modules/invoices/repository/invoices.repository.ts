import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Invoice } from "../entities/invoice.entity";
import { CreateInvoiceDto } from "../dto/create-invoice.dto";

@Injectable()
export class InvoiceRepository extends Repository<Invoice> {
  constructor(dataSource: DataSource) {
    super(Invoice, dataSource.createEntityManager());
  }
  async getStatistics(
    start_date: string = "2000-01-01",
    end_date: string = "2050-01-01"
  ) {
    console.log(end_date, end_date);

    const compensated_and_eletrical = await this.query(
      `SELECT i."date" , sum(compensated_energy_kwh::numeric)as compensated_KWH, sum(electrical_energy_kwh::NUMERIC) as eletrical_KWH 
      FROM public.invoices i 
      where concat(i."date",'-01')::date  between '${start_date}'::date and '${end_date}'::date group by i."date" order by i."date" `
    );
    const financial_values = await this.query(
      `select sum(total_value_without_gd::numeric) total_consume, sum(compensated_energy_value::numeric) as total_economy 
      from invoices i
      where concat(i."date",'-01')::date  between '${start_date}'::date and '${end_date}'::date
      `
    );

    return {
      compensated_and_eletrical,
      financial_values: financial_values[0],
    };
  }

  async getById(id: string): Promise<Invoice> {
    return this.findOne({ where: { id } });
  }
  async createInvoice(data: CreateInvoiceDto) {
    const invoice = new Invoice();
    Object.assign(invoice, data);

    const newinvoice = await this.save(invoice);
    return newinvoice;
  }

  getAll(): Promise<Invoice[]> {
    return this.find();
  }

  getAllByClientID(clientId: string): Promise<Invoice[]> {
    return this.find({
      where: { client_id: clientId },
      order: { date: "ASC" },
    });
  }

  getByDate(date: string, client_id: string): Promise<Invoice> {
    return this.findOne({ where: { date, client_id } });
  }
}
