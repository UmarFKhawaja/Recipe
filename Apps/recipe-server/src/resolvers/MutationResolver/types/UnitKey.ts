import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class UnitKey {
  @Field((type) => ID)
  id!: string;
}
