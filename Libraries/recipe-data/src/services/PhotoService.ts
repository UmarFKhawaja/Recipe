import { DataSource, Repository } from 'typeorm';
import { DATA_SOURCE } from '../connectors';
import { Photo } from '../entities';

export class PhotoService {
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = DATA_SOURCE;
  }

  async findPhotoByUserID(userID: string): Promise<Photo | null> {
    const photoRepository: Repository<Photo> = this.dataSource.getRepository(Photo);

    const photo: Photo | null = await photoRepository.findOne({
      where: {
        user: {
          id: userID
        }
      }
    });

    return photo;
  }

  async findPhotosByRecipeID(recipeID: string): Promise<Photo[]> {
    const photoRepository: Repository<Photo> = this.dataSource.getRepository(Photo);

    const photos: Photo[] = await photoRepository.find({
      where: {
        recipe: {
          id: recipeID
        }
      }
    });

    return photos;
  }

  async findPhotosByStepID(stepID: string): Promise<Photo[]> {
    const photoRepository: Repository<Photo> = this.dataSource.getRepository(Photo);

    const photos: Photo[] = await photoRepository.find({
      where: {
        step: {
          id: stepID
        }
      }
    });

    return photos;
  }

  async findPhotosByTaskID(taskID: string): Promise<Photo[]> {
    const photoRepository: Repository<Photo> = this.dataSource.getRepository(Photo);

    const photos: Photo[] = await photoRepository.find({
      where: {
        task: {
          id: taskID
        }
      }
    });

    return photos;
  }

  async findPhotosByIngredientID(ingredientID: string): Promise<Photo[]> {
    const photoRepository: Repository<Photo> = this.dataSource.getRepository(Photo);

    const photos: Photo[] = await photoRepository.find({
      where: {
        ingredient: {
          id: ingredientID
        }
      }
    });

    return photos;
  }
}
