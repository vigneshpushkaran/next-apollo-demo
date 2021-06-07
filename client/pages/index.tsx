import Layout from '../components/Layout/Layout'
import Typography from '@material-ui/core/Typography'
import Head from 'next/head'

const Page = () => (
  <div>
    <Head>
      <title>Demo - PS</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Typography >Demo is On !!!</Typography>
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

export default Page;
