import { ApolloProvider } from "@apollo/client";
import type { AppProps } from 'next/app';
import React from "react";
import apolloClient from "../lib/with-apollo";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}