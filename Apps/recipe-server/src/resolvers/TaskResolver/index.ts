import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Ingredient, Photo, Step, Task } from '../../entities';
import { IngredientService, PhotoService, StepService } from '../../services';
import { Context } from '../../types';
import { IngredientsArgs, PhotosArgs, StepArgs } from './types';

@Resolver((of) => Task)
export class TaskResolver {
  private readonly photoService: PhotoService;

  private readonly ingredientService: IngredientService;

  private readonly stepService: StepService;

  constructor() {
    this.photoService = new PhotoService();
    this.ingredientService = new IngredientService();
    this.stepService = new StepService();
  }

  @FieldResolver({
    nullable: true
  })
  async step(@Root() task: Task, @Args() args: StepArgs, @Ctx() context: Context): Promise<Step | null> {
    const { id: taskID }: Task = task;

    const step: Step | null = await this.stepService.findStepByTaskID(taskID);

    return step;
  }

  @FieldResolver()
  async ingredients(@Root() task: Task, @Args() args: IngredientsArgs, @Ctx() context: Context): Promise<Ingredient[]> {
    const { id: taskID }: Task = task;

    const ingredients: Ingredient[] = await this.ingredientService.findIngredientsByTaskID(taskID);

    return ingredients;
  }

  @FieldResolver()
  async photos(@Root() task: Task, @Args() args: PhotosArgs, @Ctx() context: Context): Promise<Photo[]> {
    const { id: taskID }: Task = task;

    const photos: Photo[] = await this.photoService.findPhotosByTaskID(taskID);

    return photos;
  }
}
