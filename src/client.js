import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "https://covid-19-data.p.rapidapi.com/totals",
  cache,
});
export default client;
