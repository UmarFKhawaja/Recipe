import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Step } from './Step';
import { User } from './User';
import { Photo } from './Photo';

@ObjectType()
@Entity()
export class Recipe {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

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

  @Field((type) => [Photo])
  @OneToMany(() => Photo, (photo: Photo) => photo.recipe)
  photos!: Photo[];
}
