import 'reflect-metadata';
import { Config, DATA_SOURCE } from 'recipe-data';
import { createExpressServer } from './methods';

process.nextTick(async () => {
  const config: Config = Config.instance;

  await DATA_SOURCE.initialize();

  const { httpServer, options } = await createExpressServer(config);

  httpServer.listen(config.server.port, () => {
    console.log(`Recipes API is serving at ${options.usesSSL ? 'https' : 'http'}://localhost:${config.server.port}/graphql`);
  });
});
