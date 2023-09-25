import { Field, ID, ObjectType } from 'type-graphql';
import { Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Ingredient } from './Ingredient';

@ObjectType()
@Entity()
export class Unit {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  @Index({
    unique: true
  })
  description!: string;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

  @Field((type) => [Ingredient])
  @OneToMany(() => Ingredient, (ingredient: Ingredient) => ingredient.task)
  ingredients!: Ingredient[];
}
