import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function PressReleases() {
    return (
        <>
            <Head>
                <title>Press Releases - Faith Link Systems Limited</title>
                <meta name="description" content="Press Releases" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="Press Releases Image" pageName="Press Releases" leadingRoutes={["homepage", "activity fields"]} /> */}
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <h1>PRESS RELEASES</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PressReleases