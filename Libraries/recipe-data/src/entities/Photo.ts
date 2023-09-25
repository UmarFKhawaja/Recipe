import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './Ingredient';
import { Recipe } from './Recipe';
import { Step } from './Step';
import { Task } from './Task';
import { User } from './User';

@ObjectType()
@Entity()
export class Photo {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  url!: string;

  @Field((type) => User)
  @OneToOne(() => User, (user: User) => user.photo)
  @JoinColumn({
    name: 'userID'
  })
  user!: User;

  @Field((type) => Recipe)
  @ManyToOne(() => Recipe, (recipe: Recipe) => recipe.photos)
  @JoinColumn({
    name: 'recipeID'
  })
  recipe!: Recipe;

  @Field((type) => Step)
  @ManyToOne(() => Step, (step: Step) => step.photos)
  @JoinColumn({
    name: 'stepID'
  })
  step!: Step;

  @Field((type) => Task)
  @ManyToOne(() => Task, (task: Task) => task.photos)
  @JoinColumn({
    name: 'taskID'
  })
  task!: Task;

  @Field((type) => Ingredient)
  @ManyToOne(() => Ingredient, (ingredient: Ingredient) => ingredient.photos)
  @JoinColumn({
    name: 'ingredientID'
  })
  ingredient!: Ingredient;
}
