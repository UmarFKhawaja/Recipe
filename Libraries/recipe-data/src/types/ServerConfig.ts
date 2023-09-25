import { ServerHttpsConfig } from './ServerHttpsConfig';

export interface ServerConfig {
  https: ServerHttpsConfig | null;
  port: number;
}
