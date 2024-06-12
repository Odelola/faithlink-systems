import Head from "next/head";
import { useRouter } from "next/router"

export default function Custom404() {
  const router = useRouter();
  // router.asPath == "/corporate" && router.replace("/corporate/about-us")
  return (<>
    <Head>
      <title>404 - Page Not Found</title>
    </Head>
    <section className="section-top">
      <div className="container">
        <div className="container container-lg flex flex-col items-center">
          <h1 className="text-center">404 - Page Not Found</h1>
          <img src="/404_ilustration.svg" className="max-h-[300px]" alt="Error Image" />
        </div>
      </div>
    </section>
  </>)
}