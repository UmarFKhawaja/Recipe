import { readFileSync as readFile } from 'fs';
import { parseBoolean, parseNumber, parseString } from '../methods';
import { CORSConfig } from './CORSConfig';
import { DatabaseConfig } from './DatabaseConfig';
import { ServerConfig } from './ServerConfig';
import { ServerHttpsConfig } from './ServerHttpsConfig';
import { SessionConfig } from './SessionConfig';
import { CacheConfig } from './CacheConfig';

export class Config {
  private static readonly Instance: Config = Config.createInstance();

  private readonly _cors: CORSConfig;

  private readonly _server: ServerConfig;

  private readonly _session: SessionConfig;

  private readonly _database: DatabaseConfig;

  private readonly _cache: CacheConfig;

  private constructor(cors: CORSConfig, server: ServerConfig, session: SessionConfig, database: DatabaseConfig, cache: CacheConfig) {
    this._cors = cors;
    this._server = server;
    this._session = session;
    this._database = database;
    this._cache = cache;
  }

  static get instance(): Config {
    return Config.Instance;
  }

  get cors(): CORSConfig {
    return this._cors;
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

  get cache(): CacheConfig {
    return this._cache;
  }

  private static createInstance(): Config {
    const cors: CORSConfig = Config.getCORSConfig();

    const server: ServerConfig = Config.getServerConfig();

    const session: SessionConfig = Config.getSessionConfig();

    const database: DatabaseConfig = Config.getDatabaseConfig();

    const cache: CacheConfig = Config.getCacheConfig();

    const config: Config = new Config(cors, server, session, database, cache);

    return config;
  }

  private static getCORSConfig(): CORSConfig {
    function getOrigin(): boolean | string | RegExp | (boolean | string | RegExp)[] {
      const origin = parseString('CORS_ORIGIN', '*');

      return origin;
    }

    return {
      origin: getOrigin()
    };
  }

  private static getSessionConfig(): SessionConfig {
    return {
      domain: parseString('SESSION_DOMAIN', ''),
      secret: parseString('SESSION_SECRET', 'the quick brown fox jumped over the lazy dog')
    };
  }

  private static getServerConfig(): ServerConfig {
    function getHttps(): ServerHttpsConfig | null {
      const crtFile: string = parseString('SERVER_CRT_FILE', '');
      const keyFile: string = parseString('SERVER_KEY_FILE', '');

      const https: ServerHttpsConfig | null = crtFile && keyFile
        ? {
          crt: readFile(crtFile, 'utf-8'),
          key: readFile(keyFile, 'utf-8')
        }
        : null;

      return https;
    }

    function getPort(): number {
      const port: number = parseNumber('SERVER_PORT', 6180);

      return port;
    }

    return {
      https: getHttps(),
      port: getPort()
    };
  }

  private static getDatabaseConfig(): DatabaseConfig {
    return {
      host: parseString('DATABASE_HOST', 'localhost'),
      port: parseNumber('DATABASE_PORT', 3306),
      username: parseString('DATABASE_USERNAME', 'recipes'),
      password: parseString('DATABASE_PASSWORD', 'Recipes123'),
      database: parseString('DATABASE_DATABASE', 'recipes')
    };
  }

  private static getCacheConfig(): CacheConfig {
    const host: string = parseString('CACHE_HOST', 'localhost');
    const port: number = parseNumber('CACHE_PORT', 6379);
    const password: string = parseString('CACHE_PASSWORD', '');
    const useTLS: boolean = parseBoolean('CACHE_USE_TLS', false);

    return {
      host,
      port,
      password,
      useTLS
    };
  }
}
