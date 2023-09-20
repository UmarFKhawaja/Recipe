import { DataSource, Repository } from 'typeorm';
import { DATA_SOURCE } from '../data-source';
import { Step } from '../entities';

export class StepService {
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = DATA_SOURCE;
  }

  async findStepsByRecipeID(recipeID: string): Promise<Step[]> {
    const stepRepository: Repository<Step> = this.dataSource.getRepository(Step);

    const steps: Step[] = await stepRepository.find({
      where: {
        recipe: {
          id: recipeID
        }
      }
    });

    return steps;
  }

  async findStepByTaskID(taskID: string): Promise<Step | null> {
    const stepRepository: Repository<Step> = this.dataSource.getRepository(Step);

    const step: Step | null = await stepRepository.findOne({
      where: {
        tasks: {
          id: taskID
        }
      }
    });

    return step;
  }
}
