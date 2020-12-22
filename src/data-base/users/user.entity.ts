import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class MovieUser {

  @PrimaryGeneratedColumn('uuid')
  id?: number;

  @Column({ length: 25 })
  name: string;

  @Column({unique: true, nullable: false})
  login: string;

  @Column({nullable: false})
  password: string;
}
