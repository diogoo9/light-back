import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  ResponseDecoratorOptions,
  Res,
} from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { UpdateInvoiceDto } from "./dto/update-invoice.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import * as fs from "fs";
import { Response } from "express";
const pdf = require("pdf-parse");

@Controller("invoices")
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  async create(@UploadedFile() file: Express.Multer.File) {
    return this.invoicesService.create(file);
  }

  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get(":id/download")
  async donwload(@Res() res: Response, @Param("id") id) {
    const location = await this.invoicesService.getLocationFileById(id);

    res.contentType("application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=" + "tt.pdf");
    res.send(fs.readFileSync(location));
    //res.download(location);
  }
}
