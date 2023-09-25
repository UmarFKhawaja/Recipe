import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Ingredient, Photo, Task, Unit } from '../../entities';
import { PhotoService, TaskService, UnitService } from '../../services';
import { Context } from '../../types';
import { PhotosArgs, TaskArgs, UnitArgs } from './types';

@Resolver((of) => Ingredient)
export class IngredientResolver {
  private readonly photoService: PhotoService;

  private readonly taskService: TaskService;

  private readonly unitService: UnitService;

  constructor() {
    this.photoService = new PhotoService();
    this.taskService = new TaskService();
    this.unitService = new UnitService();
  }

  @FieldResolver({
    nullable: true
  })
  async unit(@Root() ingredient: Ingredient, @Args() args: UnitArgs, @Ctx() context: Context): Promise<Unit | null> {
    const { id: ingredientID }: Ingredient = ingredient;

    const unit: Unit | null = await this.unitService.findUnitByIngredientID(ingredientID);

    return unit;
  }

  @FieldResolver({
    nullable: true
  })
  async task(@Root() ingredient: Ingredient, @Args() args: TaskArgs, @Ctx() context: Context): Promise<Task | null> {
    const { id: ingredientID }: Ingredient = ingredient;

    const task: Task | null = await this.taskService.findTaskByIngredientID(ingredientID);

    return task;
  }

  @FieldResolver()
  async photos(@Root() ingredient: Ingredient, @Args() args: PhotosArgs, @Ctx() context: Context): Promise<Photo[]> {
    const { id: ingredientID }: Ingredient = ingredient;

    const photos: Photo[] = await this.photoService.findPhotosByIngredientID(ingredientID);

    return photos;
  }
}
