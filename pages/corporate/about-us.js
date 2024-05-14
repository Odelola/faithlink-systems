import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"


function About() {
    return (
        <main className="pb-6 mb-6">
            <Head>
                <title>ABOUT US - Faith Link Systems Limited</title>
                <meta name="description" content="ABOUT US" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
      {/* <PageSubheader imgUrl="/pages/infra-development-banner.jpg" alt="INFRASTRUCTURE DEVELOPMENT image" pageName="infrastructure development" leadingRoutes={["homepage", "activity fields"]} /> */}

            <PageSubheader imgUrl="/pages/about_us.jpg" alt="About Image" pageName="telecoms services" leadingRoutes={["homepage", "corporate"]} />
            <section className="section-top">
                <div className="container container-lg">
                    <article className="flex justify-between gap-x-14 flex-col md:flex-row">
                        <aside className="basis-1/2">
                            <h1 className="text-textGray text-[20px]">At Faithlink Systems, we pride ourselves on being a team of industry specialists
                                operating within a privately owned company, effectively serving a global market
                                while maintaining a local presence.</h1>
                        <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="grid w-full">
                            <img className="w-full" src="/pages/about-us-alt.jpg" alt="POWER SECTOR IMAGE" />
                            </div>
                        </aside>
                            <aside className="basis-1/2 flex flex-col">
                                <p>Electrical power has become one of the most important commodities of our time, making
                                    grid operations more complex than ever before.</p>
                                <p>No matter your power challenges, we make sure to provide the right solutions to be
                                    successful every step of the way. Products, solutions, and services from Faithlink cover the entire value chain in these
                                    areas of activity. </p>
                                <p>We understand the unique needs of your projects and that&apos;s why we tailor our business and supply solutions to precisely meet those requirements. We make project easier for client by deploying the following.</p>
                                <ul className="ml-3 mb-3 list-disc text-[12px]">
                                    <li>Innovation Solutions</li>
                                    <li>Expert Product Solutions</li>
                                    <li>Addressing Commercial Challenges</li>
                                    <li>Portfolio Rationalization</li>
                                    <li>Sourcing Unusual items</li>
                                    <li>Flexible Service and Delivery</li>
                                    <li>Competitive Pricing</li>
                                    <li>Performance and Improvement</li>
                                </ul>
                                <p>We help actively shape the future of energy and make it a success story for all
                                    stakeholders.</p>
                            </aside>
                    </article>
                </div>
            </section>
            <SubPageNavigator leftLink="about us" rightLink="our vision and values" />


        </main>
    )
}

export default About