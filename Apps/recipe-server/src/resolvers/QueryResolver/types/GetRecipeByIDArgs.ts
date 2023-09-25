import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class GetRecipeByIDArgs {
  @Field()
  id!: string;
}
