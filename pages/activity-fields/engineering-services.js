import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function EngineeringServices() {
    return (
        <>
            <Head>
                <title>ENGINEERING SERVICES - Faith Link Systems Limited</title>
                <meta name="description" content="Engineering Services" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="Engineering Services Image" pageName="ENGINEERING SERVICES" leadingRoutes={["homepage", "activity fields"]} />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <h1>ENGINEERING SERVICES</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default EngineeringServices