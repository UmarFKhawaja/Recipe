import { Args, Ctx, Query, Resolver } from 'type-graphql';
import { Recipe, User } from '../../entities';
import { RecipeService, UserService } from '../../services';
import { Context, RecipePage } from '../../types';
import {
  GetRecipeByIDArgs,
  GetRecipesArgs,
  GetUserArgs,
  GetUserByEmailAddressArgs,
  GetUserByIDArgs,
  GetUserByUserNameArgs
} from './types';

@Resolver()
export class QueryResolver {
  private readonly recipeService: RecipeService;

  private readonly userService: UserService;

  constructor() {
    this.recipeService = new RecipeService();
    this.userService = new UserService();
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUser(@Args() args: GetUserArgs, @Ctx() context: Context): Promise<User | null> {
    const { userID: id }: Context = context;

    const user: User | null = await this.userService.findUserByID(id);

    return user;
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUserByID(@Args() args: GetUserByIDArgs, @Ctx() context: Context): Promise<User | null> {
    const { id }: GetUserByIDArgs = args;

    const user: User | null = await this.userService.findUserByID(id);

    return user;
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUserByEmailAddress(@Args() args: GetUserByEmailAddressArgs, @Ctx() context: Context): Promise<User | null> {
    const { emailAddress }: GetUserByEmailAddressArgs = args;

    const user: User | null = await this.userService.findUserByEmailAddress(emailAddress);

    return user;
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUserByUserName(@Args() args: GetUserByUserNameArgs, @Ctx() context: Context): Promise<User | null> {
    const { userName }: GetUserByUserNameArgs = args;

    const user: User | null = await this.userService.findUserByUserName(userName);

    return user;
  }

  @Query((returns) => RecipePage, {
    nullable: false
  })
  async getRecipes(@Args() args: GetRecipesArgs, @Ctx() context: Context): Promise<RecipePage> {
    const { skip, take }: GetRecipesArgs = args;

    const recipePage: RecipePage = await this.recipeService.findRecipes(skip, take);

    return recipePage;
  }

  @Query((returns) => Recipe, {
    nullable: true
  })
  async getRecipeByID(@Args() args: GetRecipeByIDArgs, @Ctx() context: Context): Promise<Recipe | null> {
    const { id }: GetRecipeByIDArgs = args;

    const recipe: Recipe | null = await this.recipeService.findRecipeByID(id);

    return recipe;
  }
}
