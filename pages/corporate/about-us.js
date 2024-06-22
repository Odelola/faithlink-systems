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

            {/* <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="About Image" pageName="about us" leadingRoutes={["homepage", "corporate"]} /> */}
            <PageSubheader imgUrl="/pages/_about-us_.jpg" alt="About Image" pageName="about us" leadingRoutes={["homepage", "corporate"]} />
            {/* <PageSubheader imgUrl="/pages/engineer-1612104_1280 (1).jpg" alt="About Image" pageName="about us" leadingRoutes={["homepage", "corporate"]} /> */}
            <section className="section-top">
                <div className="container container-lg">
                    <article className="flex justify-between gap-x-14 gap-y-8 flex-col md:flex-row">
                        <aside className="basis-1/2 text-justify" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
                            <h1 className="text-textGray text-[20px]">At Faithlink Systems, we pride ourselves on being a team of industry specialists
                                operating within a privately owned company, effectively serving a global market
                                while maintaining a local presence.</h1>
                            <div data-aos-duration="1000" data-aos="fade-right" data-aos-delay="400" className="grid w-full">
                                <img className="w-full" src="/pages/about-us-alt.jpg" alt="POWER SECTOR IMAGE" />
                            </div>
                        </aside>
                        <aside className="basis-1/2 flex flex-col" data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400">
                            <p>Electrical power has become one of the most important commodities of our time, making
                                grid operations more complex than ever before.</p>
                            <p>No matter your power challenges, we make sure to provide the right solutions to be
                                successful every step of the way. Products, solutions, and services from Faithlink cover the entire value chain in these
                                areas of activity. </p>
                            <p>We understand the unique needs of your projects and that&apos;s why we tailor our business and supply solutions to precisely meet those requirements. We make project easier for client by deploying the following.</p>
                            <ul className="ml-3 mb-3 list-disc text-[14px]">
                                <li>Innovation Solutions</li>
                                <li>Expert Product Solutions</li>
                                <li>Addressing Commercial Challenges</li>
                                <li>Portfolio Rationalization</li>
                                <li>Sourcing Unusual items</li>
                                <li>Flexible Service and Delivery</li>
                                <li>Competitive Pricing</li>
                                <li>Performance and Improvement</li>
                            </ul>
                            <p>Our consulting service offerings include strategies to reduce or shift electricity usage during peak periods in response to grid conditions or financial incentives</p>
                            {/* <p>We offer Solutions to enhance the power grid'sefficiency, reliability, and flexibility through adcanced technologies and data analytics.</p> */}
                            {/* <p>We also offer improvements to exisiting systems and infrastructure to enhance energy efficiency, automation systems for monitoring and controlling building services like lighting,
                                    HVAC and security.
                                </p> */}
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