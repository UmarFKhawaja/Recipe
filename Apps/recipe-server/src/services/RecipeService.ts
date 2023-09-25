import { DataSource, Repository } from 'typeorm';
import { DATA_SOURCE } from '../connectors';
import { Recipe } from '../entities';
import { RecipePage } from '../types';

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

  async findRecipes(skip: number, take: number): Promise<RecipePage> {
    const recipeRepository: Repository<Recipe> = this.dataSource.getRepository(Recipe);

    const [recipes, count]: [Recipe[], number] = await recipeRepository.findAndCount({
      where: {
      },
      skip,
      take: take + 1
    });

    const hasMore: boolean = recipes.length === take + 1;

    return new RecipePage(recipes, skip, take, count, hasMore);
  }
}
