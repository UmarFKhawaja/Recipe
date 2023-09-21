import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Recipe } from './Recipe';

@ObjectType()
@Entity()
export class User {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  displayName!: string;

  @Field()
  @Column()
  @Index({
    unique: true
  })
  userName!: string;

  @Field()
  @Column()
  @Index({
    unique: true
  })
  emailAddress!: string;

  @Column({
    nullable: true
  })
  saltHash!: string;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

  @Field((type) => [Recipe])
  @ManyToMany(() => Recipe, (recipe: Recipe) => recipe.users)
  recipes!: Recipe[];
}
