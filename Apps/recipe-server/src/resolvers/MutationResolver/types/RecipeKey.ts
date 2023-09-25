import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class RecipeKey {
  @Field((type) => ID)
  id!: string;
}
