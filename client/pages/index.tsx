import apolloClient from '../lib/with-apollo'
import Layout from '../components/Layout/Layout'
const Page = () => (
  <Layout>
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

)

export async function getStaticProps() {

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
}

export default Page;
