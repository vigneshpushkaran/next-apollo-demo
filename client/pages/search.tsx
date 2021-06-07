import Card from '../components/Card'
import Layout from '../components/Layout/Layout'
import styles from '../globals.module.css'
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import useUsers from '../hooks/getUsers'
import Head from 'next/head'

const search = () => {

  const { users, loading, loadMore, hasNextPage } = useUsers()

  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log("User List", users)


  return (
    <div>
      <Head>
        <title>Demo - PS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasNextPage}
          loader={<div className="loader" key={0}>Loading ...</div>}
          useWindow={true}
        >
          <div className={styles.cardParent}>
            {users.map((data) => (
              <Card key={data.id} {...data} />
            ))}
            <div className={styles.hiddenItem}></div>
            <div className={styles.hiddenItem}></div>
            <div className={styles.hiddenItem}></div>
          </div>
        </InfiniteScroll>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
      `}</style>
      </Layout>
    </div>
  )

}

export default search