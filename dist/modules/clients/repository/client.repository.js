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
exports.ClientRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const client_entity_1 = require("../entities/client.entity");
let ClientRepository = class ClientRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(client_entity_1.Client, dataSource.createEntityManager());
    }
    search(search) {
        console.log(search);
        return this.createQueryBuilder("client")
            .where("upper(name) like upper(:search) or instalation_number like :search or id like :search", { search: `%${search}%` })
            .getMany();
    }
    async createClient(data) {
        const invoice = new client_entity_1.Client();
        Object.assign(invoice, data);
        const newinvoice = await this.save(invoice);
        return newinvoice;
    }
    getAll() {
        return this.find({ relations: ["invoices"] });
    }
    getByClientNumber(id) {
        return this.findOne({ where: { id } });
    }
};
exports.ClientRepository = ClientRepository;
exports.ClientRepository = ClientRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ClientRepository);
//# sourceMappingURL=client.repository.js.map