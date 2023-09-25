import { Field, InputType } from 'type-graphql';

@InputType()
export class UnitInput {
  @Field()
  description!: string;
}
