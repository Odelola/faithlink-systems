import '../styles/globals.css'
import '../styles/Footer.css'
import '../styles/Contact.css'
import '../styles/Swiper.css'
import Layout from '../src/components/Layout'


function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
