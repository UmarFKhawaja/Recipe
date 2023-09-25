import { Field, InputType } from 'type-graphql';
import { IngredientInput } from './IngredientInput';

@InputType()
export class TaskInput {
  @Field()
  order!: number;

  @Field()
  description!: string;

  @Field((type) => [IngredientInput])
  ingredients!: IngredientInput[];
}
