import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Photo, Recipe, User } from '../../entities';
import { PhotoService, RecipeService } from '../../services';
import { Context } from '../../types';
import { PhotoArgs, RecipesArgs } from './types';

@Resolver((of) => User)
export class UserResolver {
  private readonly photoService: PhotoService;

  private readonly recipeService: RecipeService;

  constructor() {
    this.photoService = new PhotoService();
    this.recipeService = new RecipeService();
  }

  @FieldResolver()
  async recipes(@Root() user: User, @Args() args: RecipesArgs, @Ctx() context: Context): Promise<Recipe[]> {
    const { id: userID }: User = user;

    const recipes: Recipe[] = await this.recipeService.findRecipesByUserID(userID);

    return recipes;
  }

  @FieldResolver({
    nullable: true
  })
  async photo(@Root() user: User, @Args() args: PhotoArgs, @Ctx() context: Context): Promise<Photo | null> {
    const { id: userID }: User = user;

    const photo: Photo | null = await this.photoService.findPhotoByUserID(userID);

    return photo;
  }
}
