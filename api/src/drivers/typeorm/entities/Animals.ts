import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Ongs } from '@drivers/typeorm/entities/Ongs';

@Entity()
export class Animals {
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
  image_url: string

  @Column({
    type: "boolean",
    default: false,
    nullable: false,
  })
  is_available: boolean

  @Column({
    type: "varchar",
    length: 20,
    nullable: false
  })
  specie: string

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updated_at?: Date;

  @ManyToOne(() => Ongs, ong => ong.animals)
  @JoinColumn({ name: 'ong_id' })
  ong: Ongs;
}
