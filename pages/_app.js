import { useEffect } from 'react'
import Router from "next/router"
import Head from 'next/head'
import AOS from 'aos'
import "aos/dist//aos.css"
import '../styles/globals.css'
import '../styles/NProgress.css'
import '../styles/Swiper.css'
import '../styles/Footer.css'
import '../styles/Contact.css'
import Layout from '../src/components/Layout'
import Lenis from '@studio-freight/lenis'
import NProgress from "nprogress"


function MyApp({ Component, pageProps }) {


  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  useEffect(() => {
    const lenis = new Lenis({ lerp: .8, duration: 3 })
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    AOS.init();
    AOS.init({ once: true });
    AOS.refresh();


  }, [])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
