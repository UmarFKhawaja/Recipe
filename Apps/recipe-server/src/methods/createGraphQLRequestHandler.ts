import { Server as HttpServer } from 'http';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { RequestHandler } from 'express';
import { Context } from '../types';
import { createApolloContext } from './createApolloContext';
import { createGraphQLSchema } from './createGraphQLSchema';

export async function createGraphQLRequestHandler(httpServer: HttpServer): Promise<RequestHandler> {
  const server: ApolloServer<Context> = new ApolloServer<Context>({
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    schema: await createGraphQLSchema()
  });

  await server.start();

  return expressMiddleware(server, {
    context: createApolloContext
  });
}
