import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class MovieFilmSession {
  // @PrimaryGeneratedColumn()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({nullable: false})
  filmName: string;

  @Column({nullable: false})
  cinema: string;

  @Column({nullable: false})
  time: number;

  @Column({nullable: false})
  price: number;

  @Column('int', {nullable: false, array: true})
  places: number[][];
}
