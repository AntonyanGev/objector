import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphQl/schema.js";
import cors from "cors";
import { addUser, login } from "./graphQl/resolvers.js";
import { connectToDatabase } from "./config/dataBase.js";

const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST",
  })
);
const root = {
  login: async ({ email, password }) => {
    return login({ email, password });
  },
  addUser: async ({ add }) => {
    return addUser({ add });
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(PORT, async () => {
  try {
    await connectToDatabase();
  } catch (error) {
    process.exit(1);
  }
});
