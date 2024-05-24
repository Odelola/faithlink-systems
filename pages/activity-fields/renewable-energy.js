import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function RenewableEnergy() {
    return (
        <>
            <Head>
                <title>RENEWABLE ENERGY - Faith Link Systems Limited</title>
                <meta name="description" content="RENEWABLE ENERGY" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <PageSubheader imgUrl="/pages/power-sector.jpg" alt="Power Sector Image" pageName="RENEWABLE ENERGY" leadingRoutes={["homepage", "activity fields"]} /> */}
            <PageSubheader imgUrl="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Power Sector Image" pageName="RENEWABLE ENERGY" leadingRoutes={["homepage", "activity fields"]} greenOverlay={false} />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        {/* <h1>PAAS AND EAAS</h1> */}
                        <article className="flex  flex-row flex-wrap gap-16 max-md:gap-x-0 max-md:flex-col">
                            <aside className="basis-[45%]">
                                <h1 className="aos-init aos-animate text-[20px] text-textGray max-md:w-full">
                                    RENEWABLE ENERGY
                                </h1>
                                <p className="mt-6">
                                    FaithLink specializes in Renewable Energy engineering, procurement and construction. We also provide consultancy, electrical systems designs, and power system repairs and upgrades
                                    Our Renewable Integration includes the following:
                                </p>
                                <ul className="ml-3 mb-3 list-disc text-[12px]">
                                    <li>Captive Solar Power Plants</li>
                                    <li>Embedded Solar</li>
                                    <li>Grid Connected Solar</li>
                                    <li>Off Grid Power Plants</li>
                                    <li>Mini Grid</li>
                                </ul>
                                <p>
                                    We partner with clients to provide unique solutions such as Power as a Service and energy as a service to MNOs, Towercos, Banks
                                </p>
                                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="flex h-[150px] gap-x-2">
                                    <img className="basis-1/2" src="/pages/renewable-energy-1.jpg" alt="RENEWABLE ENERGY FIRST IMAGE" />
                                    <img className="basis-1/2" src="/pages/renewable-energy-2.jpg" alt="RENEWABLE ENERGY SECOND IMAGE" />
                                </div>
                            </aside>
                            <aside className="basis-[45%]">
                                <img className="w-full h-[300px] mb-4" src="/pages/paas-and-eaas.png" alt="RENEWABLE ENERGY IMAGE" />
                                {/* <h1 className="aos-init aos-animate text-[20px] text-textGray max-md:w-full">
                                    RENEWABLE ENERGY
                                </h1> */}
                                <p>Power as a Service (PaaS) is a subscription-based energy service  offering of clean, quiet, and seamless power freeing businesses  from unreliable public energy providers and toxic diesel  generators. </p>
                                <p>PaaS offer a fixed Monthly fee Naira per site to the potential Offtaker. Additional energy above the threshold is prorated at agreed  cost/kwh</p>
                                <p>FaithLink and the Offtaker signs a 10years power purchase  agreement. Offtaker provide Location/ sites for Solar  Hybrid Solution
                                </p>
                            </aside>
                        </article>
                    </div>
                </div>
            </section>
            <SubPageNavigator leftLink="engineering services" rightLink="fibre optics" />
        </>
    )
}
export default RenewableEnergy