import { DataSource, Repository } from 'typeorm';
import { DATA_SOURCE } from '../connectors';
import { Recipe } from '../entities';

export class RecipeService {
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = DATA_SOURCE;
  }

  async findRecipeByID(id: string): Promise<Recipe | null> {
    const recipeRepository: Repository<Recipe> = this.dataSource.getRepository(Recipe);

    const recipe: Recipe | null = await recipeRepository.findOne({
      where: {
        id
      }
    });

    return recipe;
  }

  async findRecipesByUserID(userID: string): Promise<Recipe[]> {
    const recipeRepository: Repository<Recipe> = this.dataSource.getRepository(Recipe);

    const recipes: Recipe[] = await recipeRepository.find({
      where: {
        users: {
          id: userID
        }
      }
    });

    return recipes;
  }

  async findRecipeByStepID(stepID: string): Promise<Recipe | null> {
    const recipeRepository: Repository<Recipe> = this.dataSource.getRepository(Recipe);

    const recipe: Recipe | null = await recipeRepository.findOne({
      where: {
        steps: {
          id: stepID
        }
      }
    });

    return recipe;
  }
}
