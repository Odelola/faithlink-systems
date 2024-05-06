import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function News() {
    return (
        <>
            <Head>
                <title>NEWS - Faith Link Systems Limited</title>
                <meta name="description" content="NEWS" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="NEWS Image" pageName="NEWS" leadingRoutes={["homepage", "activity fields"]} /> */}
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <h1>NEWS</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default News