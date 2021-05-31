import 'reflect-metadata';
import {ApolloServer} from 'apollo-server';
import {buildSchema} from 'type-graphql';

import { VideoResover } from './video/VideoResolver';

import './connection';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VideoResover]
  });

  const server = new ApolloServer({
    schema,
  });

  server.listen({port: 3333}, console.log("Server started on port 3333"));
}

bootstrap();