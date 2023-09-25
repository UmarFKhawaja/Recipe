import { Redis } from 'ioredis';
import { DataSource } from 'typeorm';
import { Ingredient, Recipe, Step, Task, Unit, User } from '../entities';
import { CreateSchema1695648913353 } from '../migrations';
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
    Recipe,
    Step,
    Task,
    Unit,
    User
  ],
  migrations: [
    CreateSchema1695648913353
  ],
  subscribers: [
  ]
});

export const CACHE: Redis = new Redis({
  host: config.cache.host,
  port: config.cache.port,
  password: config.cache.password,
  ...(config.cache.useTLS ? { tls: {} } : {})
});
