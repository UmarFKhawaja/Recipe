import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class IngredientKey {
  @Field((type) => ID)
  id!: string;
}
