import { Client } from "src/modules/clients/entities/client.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 } from "uuid";

@Entity("invoices")
export class Invoice {
  @PrimaryColumn()
  id: string;

  @Column()
  date: string;

  @Column()
  electrical_energy_kwh: string;

  @Column()
  electrical_energy_value: string;

  @Column()
  scee_without_icms_kwh: string;

  @Column()
  scee_without_icms_value: string;

  @Column()
  compensated_energy_kwh: string;

  @Column()
  compensated_energy_value: string;

  @Column()
  municipal_public_contribution: string;

  @Column()
  eletric_consume_total: string;

  @Column()
  total_value_without_gd: string;

  @Column()
  client_id: string;

  @Column()
  location: string;

  @ManyToOne(() => Client, (client) => client.invoices)
  @JoinColumn({ name: "client_id", referencedColumnName: "id" })
  client: Client;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
