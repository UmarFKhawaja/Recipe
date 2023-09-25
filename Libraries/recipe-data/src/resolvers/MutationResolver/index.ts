import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Recipe, Unit } from '../../entities';
import { Context } from '../../types';
import { RecipeInput, UnitInput } from './types';

@Resolver()
export class MutationResolver {
  constructor() {
  }

  @Mutation((type) => Recipe)
  async createUnit(@Arg('unit') unit: UnitInput, @Ctx() context: Context): Promise<Unit> {
    throw new Error('not implemented');
  }

  @Mutation((type) => Recipe)
  async createRecipe(@Arg('recipe') recipe: RecipeInput, @Ctx() context: Context): Promise<Recipe> {
    throw new Error('not implemented');
  }
}
