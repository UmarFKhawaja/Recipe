import { Args, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Recipe, Step, User } from '../../entities';
import { RecipeService, StepService, UserService } from '../../services';
import { Context, RecipePage } from '../../types';
import { GetRecipeByIDArgs, GetRecipesArgs, StepsArgs, UsersArgs } from './types';

@Resolver((of) => Recipe)
export class RecipeResolver {
  private readonly stepService: StepService;

  private readonly recipeService: RecipeService;

  private readonly userService: UserService;

  constructor() {
    this.stepService = new StepService();
    this.recipeService = new RecipeService();
    this.userService = new UserService();
  }

  @Query((returns) => RecipePage, {
    nullable: false
  })
  async getRecipes(@Args() args: GetRecipesArgs): Promise<RecipePage> {
    const { skip, take }: GetRecipesArgs = args;

    const recipePage: RecipePage = await this.recipeService.findRecipes(skip, take);

    return recipePage;
  }

  @Query((returns) => Recipe, {
    nullable: true
  })
  async getRecipeByID(@Args() args: GetRecipeByIDArgs): Promise<Recipe | null> {
    const { id }: GetRecipeByIDArgs = args;

    const recipe: Recipe | null = await this.recipeService.findRecipeByID(id);

    return recipe;
  }

  @FieldResolver()
  async steps(@Root() recipe: Recipe, @Args() args: StepsArgs, @Ctx() context: Context): Promise<Step[]> {
    const { id: recipeID }: Recipe = recipe;

    const steps: Step[] = await this.stepService.findStepsByRecipeID(recipeID);

    return steps;
  }

  @FieldResolver()
  async users(@Root() recipe: Recipe, @Args() args: UsersArgs, @Ctx() context: Context): Promise<User[]> {
    const { id: recipeID }: Recipe = recipe;

    const users: User[] = await this.userService.findUsersByRecipeID(recipeID);

    return users;
  }
}
