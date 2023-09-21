import { DataSource } from 'typeorm';
import { Ingredient, Recipe, Step, Task, Unit, User } from '../entities';
import { AddCreateAndUpdateDateColumns1695246808249, CreateSchema1693454676042 } from '../migrations';
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
    CreateSchema1693454676042,
    AddCreateAndUpdateDateColumns1695246808249
  ],
  subscribers: [
  ]
});
