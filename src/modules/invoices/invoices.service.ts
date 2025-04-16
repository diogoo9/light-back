import { Injectable } from "@nestjs/common";
import { UpdateInvoiceDto } from "./dto/update-invoice.dto";
import * as fs from "fs";
import { ClientRepository } from "../clients/repository/client.repository";
import { InvoiceRepository } from "./repository/invoices.repository";
import { AppError } from "src/errors/AppError";
import { Invoice } from "./entities/invoice.entity";
import { PdfReader } from "pdfreader";
const pdf = require("pdf-parse");

@Injectable()
export class InvoicesService {
  constructor(
    private clientRepository: ClientRepository,
    private invoiceRepository: InvoiceRepository
  ) {}

  async getLocationFileById(id: any) {
    const invoice: Invoice = await this.invoiceRepository.getById(id);

    return invoice.location;
  }
  getLineFrom(array: string[], value: string): number {
    return array.findIndex(
      (data) => data.replaceAll(/\s+/g, " ").indexOf(value) !== -1
    );
  }

  getByLineAndSplitPosition(
    array: string[],
    line: number,
    splitPosition: number
  ) {
    return array[line].replace(/\s+/g, " ").split(" ")[splitPosition];
  }

  async create(file) {
    const months = [
      "",
      "JAN",
      "FEV",
      "MAR",
      "ABR",
      "MAI",
      "JUN",
      "JUL",
      "AGO",
      "SET",
      "OUT",
      "NOV",
      "DEZ",
    ];

    const time = new Date().getTime();
    const location = "tmp/" + time + ".pdf";

    fs.writeFileSync(location, file.buffer);
    let dataBuffer = fs.readFileSync(location);
    let text: String;

    text = await pdf(dataBuffer).then(function (data) {
      return data.text;
    });

    new PdfReader().parseBuffer(dataBuffer, (err, item) => {
      if (err) console.error("error:", err);
      else if (!item) console.warn("end of buffer");
      else if (item.text) return item.text;
    });

    const lines = text.split("\n");

    const haveIE = this.getLineFrom(lines, "INSCRIÇÃO ESTADUAL");
    let lineName = this.getLineFrom(lines, "Nº DO CLIENTE") - 5;
    if (haveIE !== -1) lineName = lineName - 1;

    const name = lines[lineName];
    const line = this.getLineFrom(lines, "Referente a Vencimento") + 1;
    const completeDate = lines[line]
      .replace(/\s+/g, " ")
      .split(" ")[1]
      .split("/");

    const year = completeDate[1];
    const monthIndex = months.findIndex((m) => m === completeDate[0]);
    const month = monthIndex < 10 ? "0" + monthIndex : monthIndex;

    const date = `${year}-${month}`;

    const supplier = "CEMIG";

    const lineClientNumber = this.getLineFrom(lines, "Nº DO CLIENTE") + 1;
    const clientNumber = lines[lineClientNumber]
      .replace(/\s+/g, " ")
      .split(" ")[1];
    const instalationNUmber = lines[lineClientNumber]
      .replace(/\s+/g, " ")
      .split(" ")[2];

    const eletricKwh = lines[5].replace(/\s+/g, " ").split(" ")[2];
    const eletricValue = lines[5].replace(/\s+/g, " ").split(" ")[4];

    const sceeWithoutKwh = lines[6].replace(/\s+/g, " ").split(" ")[4];
    const sceeWithoutValue = lines[6].replace(/\s+/g, " ").split(" ")[6];

    const compensatedKwh = lines[7].replace(/\s+/g, " ").split(" ")[4];
    const compensatedValue = lines[7].replace(/\s+/g, " ").split(" ")[6];

    const contrbPublic = lines[8].replace(/\s+/g, " ").split(" ")[4];

    const eletricConsume =
      this.convertToAmericanValue(eletricKwh) +
      this.convertToAmericanValue(sceeWithoutKwh);

    const totalValueWithoutGD =
      this.convertToAmericanValue(eletricValue) +
      this.convertToAmericanValue(sceeWithoutValue) +
      this.convertToAmericanValue(contrbPublic);

    const reference = lines[43].replace(/\s+/g, " ").split(" ")[1];

    const clienExist =
      await this.clientRepository.getByClientNumber(clientNumber);

    let client;

    if (!clienExist)
      client = await this.clientRepository.createClient({
        id: clientNumber,
        instalation_number: instalationNUmber,
        name: name,
        supplier,
      });

    const invoiceExits = await this.invoiceRepository.getByDate(
      date,
      clientNumber
    );

    if (invoiceExits) {
      await fs.unlinkSync(location);
      throw new AppError("a fatura já existe;");
    }

    const newLocation = `tmp/${instalationNUmber}-${month}-${year}.pdf`;
    const invoice = this.invoiceRepository.createInvoice({
      client_id: clientNumber,
      date: date,
      compensated_energy_kwh: this.convertToAmericanValue(compensatedKwh),
      compensated_energy_value: this.convertToAmericanValue(compensatedValue),
      electrical_energy_kwh: this.convertToAmericanValue(eletricKwh),
      electrical_energy_value: this.convertToAmericanValue(eletricValue),
      municipal_public_contribution: this.convertToAmericanValue(contrbPublic),
      scee_without_icms_kwh: this.convertToAmericanValue(sceeWithoutKwh),
      scee_without_icms_value: this.convertToAmericanValue(sceeWithoutValue),
      eletric_consume_total: eletricConsume,
      total_value_without_gd: totalValueWithoutGD,
      location: newLocation,
    });

    fs.renameSync(location, newLocation);

    return invoice;
  }

  findAll() {
    return `This action returns all invoices`;
  }

  async download(id: string) {
    const data = await this.invoiceRepository.findOne({ where: { id } });
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }

  convertToAmericanValue(value) {
    return Number(value.replace(".", "").replaceAll(",", "."));
  }

  convertToBr(value) {
    return new Intl.NumberFormat("en-US", { currency: "USD" }).format(value);
  }
}
