import express from "express";

import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";

export const intiServer = async () => {
  const app = express();

  app.use(bodyParser.json());

  const graphqlServer = new ApolloServer({
    typeDefs: `
      type Query {
          sayHello:String
      }
    `,
    resolvers: {
      Query: {
        sayHello: (_parent, _args, _ctx) => `this is my name ${_args.name}`,
      },
    },
  });

  await graphqlServer.start();

  app.use("/graphql", expressMiddleware(graphqlServer));

  return app;
};
