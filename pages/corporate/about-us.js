import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function About() {
    return (
        <main className="pb-6 mb-6">
            <Head>
                <title>ABOUT US - Faith Link Systems Limited</title>
                <meta name="description" content="ABOUT US" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageSubheader imgUrl="/pages/about_us.jpg" alt="About Image" pageName="about us" leadingRoutes={["homepage", "corporate"]} />
            <section className="section-top">
                <div className="container container-lg">
                    <div className="flex justify-between gap-x-14 flex-col md:flex-row">
                        <aside className="basis-1/2">
                            <h1 className="text-textGray text-[20px]">At Faithlink Systems, we pride ourselves on being a team of industry specialists
                                operating within a privately owned company, effectively serving a global market
                                while maintaining a local presence.</h1>
                        </aside>
                        <aside className="basis-1/2 flex flex-col gap-y-8">
                            <p>Electrical power has become one of the most important commodities of our time, making
                                grid operations more complex than ever before.</p>
                            <p>No matter your power challenges, we make sure to provide the right solutions to be
                                successful every step of the way. Products, solutions, and services from Faithlink cover the entire value chain in these
                                areas of activity. </p>
                            <p>We help actively shape the future of energy and make it a success story for all
                                stakeholders.</p>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About