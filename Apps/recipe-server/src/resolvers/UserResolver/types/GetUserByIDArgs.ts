import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class GetUserByIDArgs {
  @Field()
  id!: string;
}
