import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Recipe } from './Recipe';
import { Task } from './Task';

@ObjectType()
@Entity()
export class Step {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field((type) => Int)
  @Column()
  order!: number;

  @Field()
  @Column()
  description!: string;

  @Field((type) => Recipe)
  @ManyToOne(() => Recipe, (recipe: Recipe) => recipe.steps)
  @JoinColumn({
    name: 'recipeID'
  })
  recipe!: Recipe;

  @Field((type) => Task)
  @OneToMany(() => Task, (task: Task) => task.step)
  tasks!: Task;
}
