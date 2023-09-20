import { Args, Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Recipe, Step, Task } from '../../entities';
import { RecipeService, TaskService } from '../../services';
import { Context } from '../../types';
import { RecipeArgs, TasksArgs } from './types';

@Resolver((of) => Step)
export class StepResolver {
  private readonly recipeService: RecipeService;

  private readonly taskService: TaskService;

  constructor() {
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
}
