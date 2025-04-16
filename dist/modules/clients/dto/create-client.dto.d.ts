import { Client } from "../entities/client.entity";
declare const CreateClientDto_base: import("@nestjs/mapped-types").MappedType<Partial<Client>>;
export declare class CreateClientDto extends CreateClientDto_base {
    id?: string;
    instalation_number?: string;
    name?: string;
    supplier?: string;
}
export {};
