import { InvoicesService } from "./invoices.service";
import { Response } from "express";
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    create(file: Express.Multer.File): Promise<import("./entities/invoice.entity").Invoice>;
    findAll(): string;
    donwload(res: Response, id: any): Promise<void>;
}
