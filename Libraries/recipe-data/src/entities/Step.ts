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

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

  @Field((type) => Recipe)
  @ManyToOne(() => Recipe, (recipe: Recipe) => recipe.steps)
  @JoinColumn({
    name: 'recipeID'
  })
  recipe!: Recipe;

  @Field((type) => Task)
  @OneToMany(() => Task, (task: Task) => task.step)
  tasks!: Task;

  @Field((type) => [Photo])
  @OneToMany(() => Photo, (photo: Photo) => photo.step)
  photos!: Photo[];
}
