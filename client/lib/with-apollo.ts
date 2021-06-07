import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client"

let apolloClient: ApolloClient<NormalizedCacheObject> = createApolloClient();

function createApolloClient() {
  return new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache()
  });
}

export default apolloClient;
