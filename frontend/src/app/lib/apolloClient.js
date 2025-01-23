import { ApolloClient, InMemoryCache } from "@apollo/client";

const URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:5005";

const client = new ApolloClient({
  uri: `${URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
