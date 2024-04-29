import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist//aos.css"
import '../styles/globals.css'
import '../styles/Footer.css'
import '../styles/Contact.css'
import '../styles/Swiper.css'
import Layout from '../src/components/Layout'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.init({once: true});
    AOS.refresh();
  
  }, [])
  
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
