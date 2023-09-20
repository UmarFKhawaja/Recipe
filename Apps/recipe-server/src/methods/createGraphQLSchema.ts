import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import {
  IngredientResolver,
  RecipeResolver,
  StepResolver,
  TaskResolver,
  UnitResolver,
  UserResolver
} from '../resolvers';

export async function createGraphQLSchema(): Promise<GraphQLSchema> {
  const schema: GraphQLSchema = await buildSchema({
    resolvers: [
      IngredientResolver,
      RecipeResolver,
      StepResolver,
      TaskResolver,
      UnitResolver,
      UserResolver
    ]
  });

  return schema;
}
