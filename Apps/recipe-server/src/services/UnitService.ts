import { DataSource, Repository } from 'typeorm';
import { DATA_SOURCE } from '../connectors';
import { Unit } from '../entities';

export class UnitService {
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = DATA_SOURCE;
  }

  async findUnitByIngredientID(ingredientID: string): Promise<Unit | null> {
    const unitRepository: Repository<Unit> = this.dataSource.getRepository(Unit);

    const unit: Unit | null = await unitRepository.findOne({
      where: {
        ingredients: {
          id: ingredientID
        }
      }
    });

    return unit;
  }
}
