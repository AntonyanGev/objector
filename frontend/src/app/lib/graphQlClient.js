import { GraphQLClient } from "graphql-request";

const URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:5005";

const client = new GraphQLClient(`${URL}/graphql`);

export default client;
