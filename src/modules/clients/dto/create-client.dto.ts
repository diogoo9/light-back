import { PartialType } from "@nestjs/mapped-types";
import { Client } from "../entities/client.entity";

export class CreateClientDto extends PartialType(Client) {
  id?: string;
  instalation_number?: string;
  name?: string;
  supplier?: string;
}
