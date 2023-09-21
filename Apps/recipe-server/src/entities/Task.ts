import { Field, ID, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { Step } from './Step';
import { Ingredient } from './Ingredient';

@ObjectType()
@Entity()
export class Task {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  order!: number;

  @Field()
  @Column()
  description!: string;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

  @Field((type) => Step)
  @ManyToOne(() => Step, (step: Step) => step.tasks)
  @JoinColumn({
    name: 'stepID'
  })
  step!: Step;

  @Field((type) => [Ingredient])
  @OneToMany(() => Ingredient, (ingredient: Ingredient) => ingredient.task)
  ingredients!: Ingredient[];
}
