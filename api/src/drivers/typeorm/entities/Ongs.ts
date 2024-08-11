import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { Animals } from '@drivers/typeorm/entities/Animals';

@Entity()
export class Ongs {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 120,
    nullable: false
  })
  name: string

  @Column({
    type: "varchar",
    length: 14,
    nullable: false
  })
  cnpj: string

  @Column({
    type: "varchar",
    length: 120,
    nullable: false
  })
  description: string

  @Column({
    type: "varchar",
    length: 120,
    nullable: false
  })
  email: string

  @Column({
    type: "varchar",
    length: 15,
    nullable: false
  })
  whatsapp: string

  @Column({
    type: "text",
    nullable: false
  })
  logo_url: string

  @Column({
    type: "boolean",
    default: false,
    nullable: false,
  })
  is_active: boolean

  @Column({
    type: "varchar",
    length: 120,
    nullable: false
  })
  city: string

  @Column({
    type: "varchar",
    length: 2,
    nullable: false
  })
  state: string

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updated_at?: Date;

  @OneToMany(() => Animals, animal => animal.ong)
  animals: Animals[];
}
