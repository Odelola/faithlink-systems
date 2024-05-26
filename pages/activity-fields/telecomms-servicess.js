import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function TelecommsServices() {
    return (
        <>
            <Head>
                <title>TELECOMMS SERVICES - Faith Link Systems Limited</title>
                <meta name="description" content="TELECOMMS Services" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="TELECOMMS Services Image" pageName="telecomms services" leadingRoutes={["homepage", "activity fields"]} />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        {/* <h1>TELECOMMS SERVICES</h1> */}
                        <article className="flex  flex-row flex-wrap gap-16 max-md:gap-x-0 max-md:flex-col">
                            <aside className="basis-[45%]">
                                <h1 className="aos-init aos-animate text-[20px] text-textGray max-md:w-full">
                                    TELECOMS DIVISION
                                </h1>
                                <p className="mt-6">
                                    FAITHLINK Telecoms Division is primarily involved in the  construction, installation, management and maintenance of Base Station Transceiver (BTS) sites for the telecommunications, Towercos, commercial, Industrial, Oil and Gas sectors of the economy.  Our Product offering include the following
                                </p>
                                <ul className="ml-3 mb-3 list-disc text-[14px]">
                                    <li>Greenfield Site Build</li>
                                    <li>Site Upgrade</li>
                                    <li>RF Installation & Optimization</li>
                                    <li>Managed Services ( Active & Passive)</li>
                                    <li>Optic Fibre Deployment & Maintenance </li>
                                    <li>Material Supply ( Fibre optics cables, HDPE Pipes, Rectifiers, Batteries, Transformers, feeder cables, path cords, etc)</li>
                                </ul>
                                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="flex h-[150px] gap-x-2">
                                    <img className="basis-1/2" src="/pages/telecoms-division-1.png" alt="TELECOMS DIVISION FIRST IMAGE" />
                                    <img className="basis-1/2" src="/pages/telecoms-division-2.png" alt="TELECOMS DIVISION SECOND IMAGE" />
                                </div>
                            </aside>
                            <aside className="basis-[45%]">
                                <h1 className="aos-init aos-animate text-[20px] text-textGray max-md:w-full">
                                    GREENFIELD SITE BUILD
                                </h1>
                                <p className="mt-6">
                                    FAITHLINK has the requisite experience and expertise in the delivery of Greenfield and Brownfield Site Build for Telecom Operators and Towercos Providers. Our ability to deliver sites within 45 days has ensured that our services remain ever relevant in the telecom industry. We also execute In Building Solution (IBS) Site audit and Site upgrade as required by our clients.
                                    FAITHLINK strongly believes and adopts the five principles of project management such as Initiating, Planning, Execution, Monitoring & Control and Closure.
                                </p>

                                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="flex h-[150px] gap-x-2">
                                    <img className="basis-1/2" src="/pages/greenfield-1.jpg" alt="GREENFIELD FIRST IMAGE" />
                                    <img className="basis-1/2" src="/pages/greenfield-2.jpg" alt="GREENFIELD SECOND IMAGE" />
                                </div>
                            </aside>
                            <aside className="basis-[45%]">
                                <h1 className="aos-init aos-animate text-[20px] text-textGray max-md:w-full">
                                    TOWER AUDIT & MAINTENANCE
                                </h1>
                                <p className="mt-6">
                                    FAITHLINK provides world class Tower Auditing and Maintenance Services for Telecom Operators and Tower Companies . Services provided include: Tower Inspection, Tower Loading Analysis, Tower Re-alignment, Bolt Tightening and Torquing, Lightening and Earthing System installation and reactivation and Anti-corrosion Protective Coating.
                                </p>

                                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="flex h-[150px] gap-x-2">
                                    <img className="basis-1/2" src="/pages/tower-audit-1.jpg" alt="TOWER AUDIT FIRST IMAGE" />
                                    <img className="basis-1/2" src="/pages/tower-audit-2.jpg" alt="TOWER AUDIT SECOND IMAGE" />
                                </div>
                            </aside>
                            <aside className="basis-[45%]">
                                <h1 className="aos-init aos-animate text-[20px] text-textGray max-md:w-full">
                                    RF INSTALLATION & MAINTENANCE
                                </h1>
                                <p className="mt-6">
                                    FAITHLINK  execute RF installations of fiber transmission or feeder cable from RRU to nodal equipment on 2G, 3G, 4G & 5G platform networks as well as installation and commissioning of antenna (such as Katherin, CommScope, Prose, Huawei) and microwave links. We equally execute RF drive tests on networks and also pre and post-optimization analysis of drive test results.

                                </p>

                                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="flex h-[150px] gap-x-2">
                                    <img className="basis-1/2" src="/pages/rf-installation-1.jpg" alt="RF INSTALLATION FIRST IMAGE" />
                                    <img className="basis-1/2" src="/pages/rf-installation-2.jpg" alt="RF INSTALLATION SECOND IMAGE" />
                                </div>
                            </aside>
                            {/* <aside className="basis-1/2">
                                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="grid grid-cols-2 gap-x-2 w-full">
                                    <img className="basis-1/2" src="/pages/greenfield-1.jpg" alt="GREENFIELD IMAGE" />
                                    <img className="basis-1/2" src="/pages/greenfield-2.jpg" alt="GREENFIELD IMAGE" />
                                </div>
                                <div className="mt-12">
                                    <p>
                                        FAITHLINK has the requisite experience and expertise in the delivery of Greenfield and Brownfield Site Build for Telecom Operators and Towercos Providers. Our ability to deliver sites within 45 days has ensured that our services remain ever relevant in the telecom industry. We also execute In Building Solution (IBS) Site audit and Site upgrade as required by our clients.
                                        FAITHLINK strongly believes and adopts the five principles of project management such as Initiating, Planning, Execution, Monitoring & Control and Closure.

                                    </p>
                                    <p>
                                        Products, solutions, and services from Faithlink cover the entire value chain in these areas of activity. We help actively shape tthe future of energy and makke it a success story for all stakeholders.
                                    </p>
                                </div>
                            </aside> */}
                        </article>
                    </div>
                </div>
            </section>
            <SubPageNavigator leftLink="power sector" rightLink="renewable energy" />
        </>
    )
}
export default TelecommsServices