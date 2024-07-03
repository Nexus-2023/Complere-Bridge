import { HttpLink, ApolloClient , InMemoryCache } from "@apollo/client"
 

export const getClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_NEXUS_GRAPH_API,
    }),
  });

 
