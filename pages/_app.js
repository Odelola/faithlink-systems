import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist//aos.css"
import '../styles/globals.css'
import '../styles/Footer.css'
import '../styles/Contact.css'
import '../styles/Swiper.css'
import Layout from '../src/components/Layout'
import Lenis from '@studio-freight/lenis'


function MyApp({ Component, pageProps }) {
  useEffect(() => {

    const lenis = new Lenis({lerp: .8, duration: 3})



    const raf = (time) => {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

    AOS.init();
    AOS.init({ once: true });
    AOS.refresh();


  }, [])

  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
