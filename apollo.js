import { ApolloClient, HttpLink, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

// const client = new ApolloClient({
//   uri: "https://silent-pig-17.loca.lt/graphql",
//   cache: new InMemoryCache(),
// });

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
