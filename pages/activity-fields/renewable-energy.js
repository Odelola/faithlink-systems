import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function RenewableEnergy() {
    return (
        <>
            <Head>
                <title>RENEWABLE ENERGY - Faith Link Systems Limited</title>
                <meta name="description" content="RENEWABLE ENERGY" />
            </Head>
            <PageSubheader imgUrl="_renewable energy_.jpg" alt="Power Sector Image" pageName="RENEWABLE ENERGY" leadingRoutes={["homepage", "activity fields"]} />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <article className="flex  flex-row flex-wrap gap-16 max-md:gap-x-0 max-slg:flex-col">
                            <aside className="basis-[45%]" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
                                <h1 className="aos-init aos-animate text-[20px] text-textGray max-md:w-full">
                                    RENEWABLE ENERGY
                                </h1>
                                <p className="mt-6">
                                    FaithLink specializes in Renewable Energy engineering, procurement and construction. We also provide consultancy, electrical systems designs, and power system repairs and upgrades
                                    Our Renewable Integration includes the following:
                                </p>
                                <ul className="ml-3 mb-3 list-disc text-[14px]">
                                    <li>Captive Solar Power Plants</li>
                                    <li>Embedded Solar</li>
                                    <li>Grid Connected Solar</li>
                                    <li>Off Grid Power Plants</li>
                                    <li>Mini Grid</li>
                                </ul>
                                <p>
                                    We partner with clients to provide unique solutions such as Power as a Service and energy as a service to MNOs, Towercos, Banks
                                </p>
                                {/* <p>Power as a Service (PaaS) is a subscription-based energy service  offering of clean, quiet, and seamless power freeing businesses  from unreliable public energy providers and toxic diesel  generators.  </p> */}
                                <div data-aos-duration="1000" data-aos="fade-right" data-aos-delay="400" className="flex h-[150px] gap-x-2">
                                    <img className="basis-1/2" src="/pages/renewable-energy-1.jpg" alt="RENEWABLE ENERGY FIRST IMAGE" />
                                    <img className="basis-1/2" src="/pages/renewable-energy-2.jpg" alt="RENEWABLE ENERGY SECOND IMAGE" />
                                </div>
                            </aside>
                            <aside className="basis-[45%]" data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400">
                                <img className="w-full mb-4 max-slg:h-[400px]" src="/pages/paas-and-eaas.png" alt="RENEWABLE ENERGY IMAGE" />
                                <p>PaaS offer a fixed Monthly fee Naira per site to the potential Offtaker. FaithLink and the Offtaker signs a 10years power purchase  agreement. Offtaker provide Location/ sites for Solar  Hybrid Solution.</p>
                            </aside>
                        </article>
                    </div>
                </div>
            </section>
            <SubPageNavigator leftLink="telecoms sector" rightLink="fibre optics" />
        </>
    )
}
export default RenewableEnergy