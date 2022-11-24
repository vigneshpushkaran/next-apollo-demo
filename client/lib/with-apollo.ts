import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client"

let apolloClient: ApolloClient<NormalizedCacheObject> = createApolloClient();

function createApolloClient() {
  return new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    cache: new InMemoryCache()
  });
}

export default apolloClient;
