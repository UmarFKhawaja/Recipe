import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Photo, Recipe, Step, Task } from '../../entities';
import { PhotoService, RecipeService, TaskService } from '../../services';
import { Context } from '../../types';
import { PhotosArgs, RecipeArgs, TasksArgs } from './types';

@Resolver((of) => Step)
export class StepResolver {
  private readonly photoService: PhotoService;

  private readonly recipeService: RecipeService;

  private readonly taskService: TaskService;

  constructor() {
    this.photoService = new PhotoService();
    this.recipeService = new RecipeService();
    this.taskService = new TaskService();
  }

  @FieldResolver({
    nullable: true
  })
  async recipe(@Root() step: Step, @Args() args: RecipeArgs, @Ctx() context: Context): Promise<Recipe | null> {
    const { id: stepID }: Step = step;

    const recipe: Recipe | null = await this.recipeService.findRecipeByStepID(stepID);

    return recipe;
  }

  @FieldResolver()
  async tasks(@Root() step: Step, @Args() args: TasksArgs, @Ctx() context: Context): Promise<Task[]> {
    const { id: stepID }: Step = step;

    const tasks: Task[] = await this.taskService.findTasksByStepID(stepID);

    return tasks;
  }

  @FieldResolver()
  async photos(@Root() step: Step, @Args() args: PhotosArgs, @Ctx() context: Context): Promise<Photo[]> {
    const { id: stepID }: Step = step;

    const photos: Photo[] = await this.photoService.findPhotosByStepID(stepID);

    return photos;
  }
}
