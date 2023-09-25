import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class TaskKey {
  @Field((type) => ID)
  id!: string;
}
