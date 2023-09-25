import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class StepKey {
  @Field((type) => ID)
  id!: string;
}
