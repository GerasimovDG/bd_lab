import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class MovieFilmScreening {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({nullable: false})
  filmName: string;

  @Column({nullable: false})
  cinema: string;

  @Column({nullable: false})
  periodStart: Date;

  @Column({nullable: false})
  periodEnd: Date;
}
