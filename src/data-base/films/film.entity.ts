import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm/index';
import { MovieActorr } from '../actors/actors.entity';
import { MovieGenre } from '../genres/genres.entity';

@Entity()
export class MovieFilm {

  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  img: string;

  @Column({unique: true, nullable: false})
  name: string;

  @Column()
  description: string;

  @Column()
  rating: string;

  @ManyToMany( () => MovieActorr, {cascade: ['insert', 'update']} )
  @JoinTable()
  actors: MovieActorr[];

  @ManyToMany( () => MovieActorr, {cascade: ['insert', 'update']} )
  @JoinTable()
  producers: MovieActorr[];

  @ManyToMany( () => MovieGenre, {cascade: ['insert', 'update']} )
  @JoinTable()
  genres: MovieGenre[];
}
