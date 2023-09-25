import { compare, hash } from 'bcryptjs';
import dayjs from 'dayjs';
import { decode, JwtPayload } from 'jsonwebtoken';
import { DataSource, Repository } from 'typeorm';
import { EMPTY_ID } from '../constants';
import { DATA_SOURCE } from '../connectors';
import { User } from '../entities';

export class UserService {
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = DATA_SOURCE;
  }

  async registerUser({ displayName, userName, emailAddress, password }: {
    displayName: string,
    userName: string,
    emailAddress: string,
    password: string
  }): Promise<boolean> {
    try {
      const dataSource: DataSource = DATA_SOURCE;
      const userRepository: Repository<User> = dataSource.getRepository(User);

      const users: User[] = await userRepository.find({
        where: [
          {
            userName
          },
          {
            emailAddress
          }
        ]
      });

      if (users.length > 0) {
        return false;
      } else {
        const saltHash: string = await hash(password, 12);

        const user: User = await userRepository.save(
          userRepository.create({
            displayName,
            userName,
            emailAddress,
            saltHash
          })
        );

        return true;
      }
    } catch (error: unknown) {
      return false;
    }
  }

  async verifyUserByBearer(token: string): Promise<User> {
    const {
      id = EMPTY_ID,
      exp = 0
    }: JwtPayload = decode(token, {
      json: true
    }) || {
      id: EMPTY_ID,
      exp: 0
    };

    const userRepository: Repository<User> = this.dataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
      where: {
        id
      }
    });

    if (user && dayjs(exp * 1000).isAfter(dayjs())) {
      return user;
    } else {
      throw new Error('There was an error authenticating the user');
    }
  }

  async verifyUserByPassword(username: string, password: string): Promise<User> {
    const userRepository: Repository<User> = this.dataSource.getRepository(User);

    const users: User[] = await userRepository.find({
      where: [
        {
          userName: username
        },
        {
          emailAddress: username
        }
      ]
    });

    if (users.length === 0) {
      throw new Error('There was no matching user');
    }

    if (users.length > 1) {
      throw new Error('There were more than one matching users');
    }

    const user: User | null = users[0] || null;

    if (!user) {
      throw new Error('There was no matching user');
    }

    if (!await compare(password, user.saltHash)) {
      throw new Error('There was an error validating the user');
    }

    return user;
  }

  async findUserByID(id: string): Promise<User | null> {
    const userRepository: Repository<User> = this.dataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
      where: {
        id
      }
    });

    return user;
  }

  async findUserByEmailAddress(emailAddress: string): Promise<User | null> {
    const userRepository: Repository<User> = this.dataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
      where: {
        emailAddress
      }
    });

    return user;
  }

  async findUserByUserName(userName: string): Promise<User | null> {
    const userRepository: Repository<User> = this.dataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
      where: {
        userName
      }
    });

    return user;
  }

  async findUsersByRecipeID(recipeID: string): Promise<User[]> {
    const userRepository: Repository<User> = this.dataSource.getRepository(User);

    const users: User[] = await userRepository.find({
      where: {
        recipes: {
          id: recipeID
        }
      }
    });

    return users;
  }

  async findUserByPhotoID(photoID: string): Promise<User | null> {
    const userRepository: Repository<User> = this.dataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
      where: {
        photo: {
          id: photoID
        }
      }
    });

    return user;
  }
}
