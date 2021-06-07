import Layout from '../components/Layout/Layout'
import Typography from '@material-ui/core/Typography';

const Page = () => (
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

)

export default Page;