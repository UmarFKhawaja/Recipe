import { readFileSync as readFile } from 'fs';
import { DatabaseConfig } from './DatabaseConfig';
import { ServerConfig } from './ServerConfig';
import { ServerHttpsConfig } from './ServerHttpsConfig';
import { SessionConfig } from './SessionConfig';
import { parseNumber, parseString } from '../methods';

export class Config {
  private static readonly Instance: Config = Config.createInstance();

  private readonly _server: ServerConfig;

  private readonly _session: SessionConfig;

  private readonly _database: DatabaseConfig;

  private constructor(server: ServerConfig, session: SessionConfig, database: DatabaseConfig) {
    this._server = server;
    this._session = session;
    this._database = database;
  }

  static get instance(): Config {
    return Config.Instance;
  }

  get server(): ServerConfig {
    return this._server;
  }

  get session(): SessionConfig {
    return this._session;
  }

  get database(): DatabaseConfig {
    return this._database;
  }

  private static createInstance(): Config {
    const crtFile: string = parseString('SERVER_CRT_FILE', '');
    const keyFile: string = parseString('SERVER_KEY_FILE', '');

    const https: ServerHttpsConfig | null = crtFile && keyFile
      ? {
        crt: readFile(crtFile, 'utf-8'),
        key: readFile(keyFile, 'utf-8')
      }
      : null;

    const port: number = parseNumber('SERVER_PORT', 6180);

    const server: ServerConfig = {
      https,
      port
    };

    const session: SessionConfig = {
      secret: parseString('SESSION_SECRET', 'the quick brown fox jumped over the lazy dog')
    };

    const database: DatabaseConfig = {
      host: parseString('DATABASE_HOST', 'localhost'),
      port: parseNumber('DATABASE_PORT', 3306),
      username: parseString('DATABASE_USERNAME', 'recipes'),
      password: parseString('DATABASE_PASSWORD', 'Recipes123'),
      database: parseString('DATABASE_DATABASE', 'recipes')
    };

    const config: Config = new Config(server, session, database);

    return config;
  }
}
