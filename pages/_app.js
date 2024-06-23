import { useEffect } from 'react'
import Router, { useRouter } from "next/router"
import Head from 'next/head'
import Script from 'next/script'


import AOS from 'aos'
import "aos/dist//aos.css"
import '../styles/globals.css'
import '../styles/NProgress.css'
import '../styles/Swiper.css'
import '../styles/Footer.css'
import '../styles/Contact.css'
import Layout from '../src/components/Layout'
import NProgress from "nprogress"
import { getRoute } from '../src/components/utils'


function MyApp({ Component, pageProps }) {

const router = useRouter();
  useEffect(() => {
    AOS.init();
    AOS.init({ once: true });
    AOS.refresh();
    const handleRouteChange = async () => {
      // Add your own logic here to check if the user is authenticated
      // const userIsAuthenticated = checkUserAuthentication();

      if (router.asPath === "/corporate") {
        await router.replace("/");
        // return null
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
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
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/marqueee@latest/style.css" />
        <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/marqueee@latest/marquee-slider.min.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
