import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function Milestones() {
    return (
        <>
            <Head>
                <title>MILESTONES - Faith Link Systems Limited</title>
                <meta name="description" content="Milestones" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="Milestones Image" pageName="MILESTONES" leadingRoutes={["homepage", "activity fields"]} />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <article className={"after:absolute after:top-0 after:left-1/2 after:context-[''] after:-translate-x-1/2 after:border after:border-dashed after:border-primary after:w-[1px] after:h-full"}>

                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Milestones