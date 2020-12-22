import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm/index';
import { MovieFilm } from '../films/film.entity';

@Entity()
export class MovieActorr {

  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({unique: true, nullable: false})
  name: string;
}
