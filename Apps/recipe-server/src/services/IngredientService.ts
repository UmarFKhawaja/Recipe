import { DataSource, Repository } from 'typeorm';
import { DATA_SOURCE } from '../data-source';
import { Ingredient } from '../entities';

export class IngredientService {
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = DATA_SOURCE;
  }

  async findIngredientsByTaskID(taskID: string): Promise<Ingredient[]> {
    const ingredientRepository: Repository<Ingredient> = this.dataSource.getRepository(Ingredient);

    const ingredients: Ingredient[] = await ingredientRepository.find({
      where: {
        task: {
          id: taskID
        }
      }
    });

    return ingredients;
  }

  async findIngredientsByUnitID(unitID: string): Promise<Ingredient[]> {
    const ingredientRepository: Repository<Ingredient> = this.dataSource.getRepository(Ingredient);

    const ingredients: Ingredient[] = await ingredientRepository.find({
      where: {
        unit: {
          id: unitID
        }
      }
    });

    return ingredients;
  }
}
