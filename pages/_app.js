import { useEffect } from 'react'
import Router from "next/router"

import AOS from 'aos'
import "aos/dist//aos.css"
import '../styles/globals.css'
import '../styles/NProgress.css'
import '../styles/Swiper.css'
import '../styles/Footer.css'
import '../styles/Contact.css'
import Layout from '../src/components/Layout'
import NProgress from "nprogress"


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
    AOS.init({ once: true });
    AOS.refresh();

  }, []);
  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
