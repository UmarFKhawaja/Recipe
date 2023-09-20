import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class GetUserByUserNameArgs {
  @Field()
  userName!: string;
}
