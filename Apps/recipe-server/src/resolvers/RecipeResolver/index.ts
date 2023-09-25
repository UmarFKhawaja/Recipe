import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Photo, Recipe, Step, User } from '../../entities';
import { PhotoService, StepService, UserService } from '../../services';
import { Context } from '../../types';
import { PhotosArgs, StepsArgs, UsersArgs } from './types';

@Resolver((of) => Recipe)
export class RecipeResolver {
  private readonly photoService: PhotoService;

  private readonly stepService: StepService;

  private readonly userService: UserService;

  constructor() {
    this.photoService = new PhotoService();
    this.stepService = new StepService();
    this.userService = new UserService();
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

  @FieldResolver()
  async photos(@Root() recipe: Recipe, @Args() args: PhotosArgs, @Ctx() context: Context): Promise<Photo[]> {
    const { id: recipeID }: Recipe = recipe;

    const photos: Photo[] = await this.photoService.findPhotosByRecipeID(recipeID);

    return photos;
  }
}
