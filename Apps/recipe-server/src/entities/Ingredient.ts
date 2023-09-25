import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Photo } from './Photo';
import { Task } from './Task';
import { Unit } from './Unit';

@ObjectType()
@Entity()
export class Ingredient {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  description!: string;

  @Field((type) => Int)
  @Column()
  quantity!: number;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

  @Field((type) => Unit)
  @ManyToOne(() => Unit, (unit: Unit) => unit.ingredients)
  @JoinColumn({
    name: 'unitID'
  })
  unit!: Unit;

  @Field((type) => Task)
  @ManyToOne(() => Task, (task: Task) => task.ingredients)
  @JoinColumn({
    name: 'taskID'
  })
  task!: Task;

  @Field((type) => [Photo])
  @OneToMany(() => Photo, (photo: Photo) => photo.ingredient)
  photos!: Photo[];
}
