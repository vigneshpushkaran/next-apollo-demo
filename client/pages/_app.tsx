import { ApolloProvider } from "@apollo/client"
import type { AppProps } from 'next/app'
import React from "react";
import Header from '../components/Header'
import apolloClient from "../lib/with-apollo"
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0'

export default function App({ Component, pageProps }: AppProps) {

  const { user } = pageProps;

  return (
    <div>
      <Head>
        <title>Demo - PS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserProvider user={user}>
        <Header />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </UserProvider>
    </div>
  );
}