import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm/index';
import { MovieFilm } from '../films/film.entity';

@Entity()
export class MovieTheater {

  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({unique: true, nullable: false})
  name: string;

  @Column()
  address: string;

  @ManyToMany( () => MovieFilm )
  @JoinTable()
  films: MovieFilm[];
}
