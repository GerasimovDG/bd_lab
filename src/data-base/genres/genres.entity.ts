import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class MovieGenre {

  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({unique: true, nullable: false})
  name: string;
}
