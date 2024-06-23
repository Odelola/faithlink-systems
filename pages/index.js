import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import { ActivityFields, HomeCarousel, OtherDetails, Sustainability, PartnersMarquee } from '../src/components/pages';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>HOMEPAGE - Faith Link Systems Limited</title>
        <meta name="description" content="The Official Homepage of Faith Link Systems Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeCarousel />
        <PartnersMarquee />
        {/* <ActivityFields /> */}
        {/* <Sustainability /> */}
        {/* <OtherDetails /> */}
        {/* <ProductionNetwork /> */}
      </main>
    </div>
  )
}

{/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */ }