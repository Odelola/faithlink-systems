import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function PaasAndEaas() {
    return (
        <>
            <Head>
                <title>PAAS/EAAS - Faith Link Systems Limited</title>
                <meta name="description" content="PAAS/EAAS" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="Power Sector Image" pageName="PAAS/EAAS" leadingRoutes={["homepage", "activity fields"]} />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <h1>PAAS AND EAAS</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PaasAndEaas