import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/contact")
  }, [])
  
  return (
    <div>
      <Head>
        <title>Faith Link Systems Limited</title>
        <meta name="description" content="The Official Homepage of Faith Link Systems Limited" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300@500&display=swap" rel="stylesheet" />
      </Head>

    </div>
  )
}

{/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */ }