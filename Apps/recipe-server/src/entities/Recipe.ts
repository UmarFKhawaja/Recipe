import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Step } from './Step';
import { User } from './User';

@ObjectType()
@Entity()
export class Recipe {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field((type) => Int)
  @Column()
  order!: number;

  @Field((type) => [Step])
  @OneToMany(() => Step, (step: Step) => step.recipe)
  steps!: Step[];

  @Field((type) => [User])
  @ManyToMany(() => User, (user: User) => user.recipes)
  @JoinTable({
    name: 'recipe_user',
    joinColumn: {
      name: 'recipeID'
    },
    inverseJoinColumn: {
      name: 'userID'
    }
  })
  users!: User[];
}
