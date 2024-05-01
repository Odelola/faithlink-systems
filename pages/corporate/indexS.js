import Head from "next/head"
import { useRouter } from "next/router"
import { useLayoutEffect } from "react"

function Corporate() {
    const router = useRouter();
    useLayoutEffect(() => {
        router.replace("/corporate/about-us")
    }, [])
    return (
        <Head>
            <title>CORPORATE - Faith Link Systems Limited</title>
            <meta name="description" content="CORPORATE" />
        </Head>

    )
}

export default Corporate