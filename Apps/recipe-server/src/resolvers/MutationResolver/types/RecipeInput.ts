import { Field, InputType } from 'type-graphql';
import { StepInput } from './StepInput';

@InputType()
export class RecipeInput {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field((type) => [StepInput])
  steps!: StepInput[];
}
