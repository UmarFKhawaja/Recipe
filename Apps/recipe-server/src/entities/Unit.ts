import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';
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
