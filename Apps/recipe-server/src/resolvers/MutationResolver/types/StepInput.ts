import { Field, InputType } from 'type-graphql';
import { TaskInput } from './TaskInput';

@InputType()
export class StepInput {
  @Field()
  order!: number;

  @Field()
  description!: string;

  @Field((type) => [TaskInput])
  tasks!: TaskInput[];
}
