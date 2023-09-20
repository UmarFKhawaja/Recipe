import { Args, Ctx, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Recipe, User } from '../../entities';
import { RecipeService, UserService } from '../../services';
import { Context } from '../../types';
import { GetUserByIDArgs, GetUserByEmailAddressArgs, GetUserByUserNameArgs, RecipesArgs } from './types';

@Resolver((of) => User)
export class UserResolver {
  private readonly recipeService: RecipeService;

  private readonly userService: UserService;

  constructor() {
    this.recipeService = new RecipeService();
    this.userService = new UserService();
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUserByID(@Args() args: GetUserByIDArgs): Promise<User | null> {
    const { id }: GetUserByIDArgs = args;

    const user: User | null = await this.userService.findUserByID(id);

    return user;
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUserByEmailAddress(@Args() args: GetUserByEmailAddressArgs): Promise<User | null> {
    const { emailAddress }: GetUserByEmailAddressArgs = args;

    const user: User | null = await this.userService.findUserByEmailAddress(emailAddress);

    return user;
  }

  @Query((returns) => User, {
    nullable: true
  })
  async getUserByUserName(@Args() args: GetUserByUserNameArgs): Promise<User | null> {
    const { userName }: GetUserByUserNameArgs = args;

    const user: User | null = await this.userService.findUserByUserName(userName);

    return user;
  }

  @FieldResolver()
  async recipes(@Root() user: User, @Args() args: RecipesArgs, @Ctx() context: Context): Promise<Recipe[]> {
    const { id: userID }: User = user;

    const recipes: Recipe[] = await this.recipeService.findRecipesByUserID(userID);

    return recipes;
  }
}
