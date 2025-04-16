"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const invoice_entity_1 = require("../entities/invoice.entity");
let InvoiceRepository = class InvoiceRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(invoice_entity_1.Invoice, dataSource.createEntityManager());
    }
    async getStatistics(start_date = "2000-01-01", end_date = "2050-01-01") {
        console.log(end_date, end_date);
        const compensated_and_eletrical = await this.query(`SELECT i."date" , sum(compensated_energy_kwh::numeric)as compensated_KWH, sum(electrical_energy_kwh::NUMERIC) as eletrical_KWH 
      FROM public.invoices i 
      where concat(i."date",'-01')::date  between '${start_date}'::date and '${end_date}'::date group by i."date" order by i."date" `);
        const financial_values = await this.query(`select sum(total_value_without_gd::numeric) total_consume, sum(compensated_energy_value::numeric) as total_economy 
      from invoices i
      where concat(i."date",'-01')::date  between '${start_date}'::date and '${end_date}'::date
      `);
        return {
            compensated_and_eletrical,
            financial_values: financial_values[0],
        };
    }
    async getById(id) {
        return this.findOne({ where: { id } });
    }
    async createInvoice(data) {
        const invoice = new invoice_entity_1.Invoice();
        Object.assign(invoice, data);
        const newinvoice = await this.save(invoice);
        return newinvoice;
    }
    getAll() {
        return this.find();
    }
    getAllByClientID(clientId) {
        return this.find({
            where: { client_id: clientId },
            order: { date: "ASC" },
        });
    }
    getByDate(date, client_id) {
        return this.findOne({ where: { date, client_id } });
    }
};
exports.InvoiceRepository = InvoiceRepository;
exports.InvoiceRepository = InvoiceRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], InvoiceRepository);
//# sourceMappingURL=invoices.repository.js.map