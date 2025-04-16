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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const client_repository_1 = require("./repository/client.repository");
const invoices_repository_1 = require("../invoices/repository/invoices.repository");
let ClientsService = class ClientsService {
    constructor(clientRepository, invoiceRepository) {
        this.clientRepository = clientRepository;
        this.invoiceRepository = invoiceRepository;
    }
    create(createClientDto) { }
    findAll(search) {
        if (search) {
            return this.clientRepository.search(search);
        }
        return this.clientRepository.getAll();
    }
    findInvoices(id) {
        return this.invoiceRepository.getAllByClientID(id);
    }
    update(id, updateClientDto) {
        return `This action updates a #${id} client`;
    }
    remove(id) {
        return `This action removes a #${id} client`;
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_repository_1.ClientRepository,
        invoices_repository_1.InvoiceRepository])
], ClientsService);
//# sourceMappingURL=clients.service.js.map