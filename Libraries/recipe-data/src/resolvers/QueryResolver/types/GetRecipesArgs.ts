import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class GetRecipesArgs {
  @Field((type) => Int)
  skip: number = 0;

  @Field((type) => Int)
  take: number = 10;
}
