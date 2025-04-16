import { Invoice } from "src/modules/invoices/entities/invoice.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";

@Entity("clients")
export class Client {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  supplier: string;

  @Column()
  instalation_number: string;

  @OneToMany(() => Invoice, (invoice) => invoice.client)
  @JoinColumn({ referencedColumnName: "id" })
  invoices: Invoice[];
}
