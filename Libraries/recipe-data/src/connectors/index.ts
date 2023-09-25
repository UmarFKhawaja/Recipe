import { Redis } from 'ioredis';
import { DataSource } from 'typeorm';
import { Ingredient, Photo, Recipe, Step, Task, Unit, User } from '../entities';
import { CreateSchema1695670716740 } from '../migrations';
import { Config } from '../types';

const config: Config = Config.instance;

export const DATA_SOURCE: DataSource = new DataSource({
  type: 'mysql',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  synchronize: false,
  logging: false,
  entities: [
    Ingredient,
    Photo,
    Recipe,
    Step,
    Task,
    Unit,
    User
  ],
  migrations: [
    CreateSchema1695670716740
  ],
  subscribers: [],
  migrationsTableName: 'migration'
});

export const CACHE: Redis = new Redis({
  host: config.cache.host,
  port: config.cache.port,
  password: config.cache.password,
  ...(config.cache.useTLS ? { tls: {} } : {})
});
