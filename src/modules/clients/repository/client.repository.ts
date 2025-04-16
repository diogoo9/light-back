import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Client } from "../entities/client.entity";
import { CreateClientDto } from "../dto/create-client.dto";

@Injectable()
export class ClientRepository extends Repository<Client> {
  constructor(dataSource: DataSource) {
    super(Client, dataSource.createEntityManager());
  }

  search(search: string) {
    console.log(search);

    return this.createQueryBuilder("client")
      .where(
        "upper(name) like upper(:search) or instalation_number like :search or id like :search",
        { search: `%${search}%` }
      )
      .getMany();
  }
  async createClient(data: CreateClientDto) {
    const invoice = new Client();
    Object.assign(invoice, data);

    const newinvoice = await this.save(invoice);
    return newinvoice;
  }

  getAll(): Promise<Client[]> {
    return this.find({ relations: ["invoices"] });
  }

  getByClientNumber(id: string): Promise<Client> {
    return this.findOne({ where: { id } });
  }
}
