import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

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
    length: 120,
    nullable: false
  })
  description: string

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

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updated_at?: Date;
}
