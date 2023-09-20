import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Task } from './Task';
import { Unit } from './Unit';

@ObjectType()
@Entity()
export class Ingredient {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field((type) => Int)
  @Column()
  quantity!: number;

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
}
