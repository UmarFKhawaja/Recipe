import { DataSource, Repository } from 'typeorm';
import { DATA_SOURCE } from '../data-source';
import { Task } from '../entities';

export class TaskService {
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = DATA_SOURCE;
  }

  async findTasksByStepID(stepID: string): Promise<Task[]> {
    const taskRepository: Repository<Task> = this.dataSource.getRepository(Task);

    const tasks: Task[] = await taskRepository.find({
      where: {
        step: {
          id: stepID
        }
      }
    });

    return tasks;
  }

  async findTaskByIngredientID(ingredientID: string): Promise<Task | null> {
    const taskRepository: Repository<Task> = this.dataSource.getRepository(Task);

    const task: Task | null = await taskRepository.findOne({
      where: {
        ingredients: {
          id: ingredientID
        }
      }
    });

    return task;
  }
}
