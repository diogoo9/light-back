import { DataSource, Repository } from "typeorm";
import { Client } from "../entities/client.entity";
import { CreateClientDto } from "../dto/create-client.dto";
export declare class ClientRepository extends Repository<Client> {
    constructor(dataSource: DataSource);
    search(search: string): Promise<Client[]>;
    createClient(data: CreateClientDto): Promise<Client>;
    getAll(): Promise<Client[]>;
    getByClientNumber(id: string): Promise<Client>;
}
