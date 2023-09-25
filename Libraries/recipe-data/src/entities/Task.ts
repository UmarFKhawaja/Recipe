import { Field, ID, ObjectType } from 'type-graphql';
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
import { Step } from './Step';
import { Ingredient } from './Ingredient';
import { Photo } from './Photo';

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

  @Field((type) => [Photo])
  @OneToMany(() => Photo, (photo: Photo) => photo.task)
  photos!: Photo[];
}
