import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import express from "express";
import cors from "cors";
import {connect} from 'mongoose';
import { typeDefs } from "../graphql/typeDefs.js";
import { resolvers } from "../graphql/resolvers.js";
const MongoDB="mongodb+srv://thejaschintu:DmTsqfeowoNtTrEJ@cluster0.zma83ly.mongodb.net/?retryWrites=true&w=majority"
const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);

await connect(MongoDB)
const startApolloServer = async(app, httpServer) => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      introspection: true,
    });
  
    await server.start();
    server.applyMiddleware({ path: "/beyondoceansserver", app});
}
startApolloServer(app, httpServer);

export default httpServer;