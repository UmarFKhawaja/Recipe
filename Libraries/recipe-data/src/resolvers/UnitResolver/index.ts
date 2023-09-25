import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Ingredient, Unit } from '../../entities';
import { IngredientService } from '../../services';
import { Context } from '../../types';
import { IngredientsArgs } from './types';

@Resolver((of) => Unit)
export class UnitResolver {
  private readonly ingredientService: IngredientService;

  constructor() {
    this.ingredientService = new IngredientService();
  }

  @FieldResolver()
  async ingredients(@Root() unit: Unit, @Args() args: IngredientsArgs, @Ctx() context: Context): Promise<Ingredient[]> {
    const { id: unitID }: Unit = unit;

    const ingredients: Ingredient[] = await this.ingredientService.findIngredientsByUnitID(unitID);

    return ingredients;
  }
}
