import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Ingredient, Photo, Recipe, Step, Task, User } from '../../entities';
import { IngredientService, RecipeService, StepService, TaskService, UserService } from '../../services';
import { Context } from '../../types';
import { IngredientArgs, RecipeArgs, StepArgs, TaskArgs, UserArgs } from './types';

@Resolver((of) => Photo)
export class PhotoResolver {
  private readonly ingredientService: IngredientService;

  private readonly recipeService: RecipeService;

  private readonly stepService: StepService;

  private readonly taskService: TaskService;

  private readonly userService: UserService;

  constructor() {
    this.ingredientService = new IngredientService();
    this.recipeService = new RecipeService();
    this.stepService = new StepService();
    this.taskService = new TaskService();
    this.userService = new UserService();
  }

  @FieldResolver({
    nullable: true
  })
  async user(@Root() photo: Photo, @Args() args: UserArgs, @Ctx() context: Context): Promise<User | null> {
    const { id: photoID }: Photo = photo;

    const user: User | null = await this.userService.findUserByPhotoID(photoID);

    return user;
  }

  @FieldResolver({
    nullable: true
  })
  async recipe(@Root() photo: Photo, @Args() args: RecipeArgs, @Ctx() context: Context): Promise<Recipe | null> {
    const { id: photoID }: Photo = photo;

    const recipe: Recipe | null = await this.recipeService.findRecipeByPhotoID(photoID);

    return recipe;
  }

  @FieldResolver({
    nullable: true
  })
  async step(@Root() photo: Photo, @Args() args: StepArgs, @Ctx() context: Context): Promise<Step | null> {
    const { id: photoID }: Photo = photo;

    const step: Step | null = await this.stepService.findStepByPhotoID(photoID);

    return step;
  }

  @FieldResolver({
    nullable: true
  })
  async task(@Root() photo: Photo, @Args() args: TaskArgs, @Ctx() context: Context): Promise<Task | null> {
    const { id: photoID }: Photo = photo;

    const task: Task | null = await this.taskService.findTaskByPhotoID(photoID);

    return task;
  }

  @FieldResolver({
    nullable: true
  })
  async ingredient(@Root() photo: Photo, @Args() args: IngredientArgs, @Ctx() context: Context): Promise<Ingredient | null> {
    const { id: photoID }: Photo = photo;

    const ingredient: Ingredient | null = await this.ingredientService.findIngredientByPhotoID(photoID);

    return ingredient;
  }
}
