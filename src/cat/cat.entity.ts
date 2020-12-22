import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('cats')
export class Cat {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  age: string;

}
