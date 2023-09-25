import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class GetUserByEmailAddressArgs {
  @Field()
  emailAddress!: string;
}
