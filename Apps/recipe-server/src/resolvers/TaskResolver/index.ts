import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Ingredient, Step, Task } from '../../entities';
import { IngredientService, StepService } from '../../services';
import { Context } from '../../types';
import { IngredientsArgs, StepArgs } from './types';

@Resolver((of) => Task)
export class TaskResolver {
  private readonly ingredientService: IngredientService;

  private readonly stepService: StepService;

  constructor() {
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
}
