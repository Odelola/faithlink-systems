import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import { ActivityFields } from '../../src/components/pages';
import SubPageNavigator from "../../src/components/SubPageNavigator";

function PowerSector() {
  const serviceOffering = [
    {
    //   image: "/pages/service-offering-generation.jpg",
      image: "https://images.unsplash.com/photo-1587127831640-7423ae037873?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "GENERATION",
      text: "Faithlink provides Embedded Power, Captive Power, Step-up Transformer and Turbine Engines"
    },
    {
    //   image: "/pages/service-offering-transmission.jpg",
      image: "https://images.unsplash.com/photo-1588339251392-e1405faa28bd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "TRANSMISSION",
      text: "This consists of Transmission Cables, Soil test and Technical Site Survey, 760KV Super Grid, 330KV lines, 132KV lines."
    },
    {
    //   image: "/pages/service-offering-distribution.jpg",
      image: "https://images.unsplash.com/photo-1591164811435-2b8a547039de?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "DISTRIBUTION",
      text: "Focusing its energy on distribution, Faithlink provides Soil test and Technical Site Survey, Step-down Transformers, 33/11kv Injector Substations, Smart Prepaid Meters"
    },
    {
    //   image: "/pages/service-offering-automation-and-control.jpg",
      image: "/pages/service-offering-automation-and-control-2.jpg",
      title: "AUTOMATION / CONTROL",
      text: "In Automation and Control, We deal with SCADA System, ATS, AMF, IPMS, Energy Management and Energy Optimization"
    },
  ]
  return (
    <>
      <Head>
        <title>POWER SECTOR - Faith Link Systems Limited</title>
        <meta name="description" content="POWER SECTOR" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <PageSubheader imgUrl="/pages/power-sector.jpg" alt="Power Sector Image" pageName="power sector" leadingRoutes={["homepage", "activity fields"]} />

      <section className="section-top">
        <div className="container">
          <div className="container container-lg">
            <article className="flex gap-x-16 max-md:gap-x-0 max-md:flex-col">
              <aside className="basis-1/2">
                <h1 className="aos-init aos-animate text-[20px] text-textGray">
                  Demanding challenges, promising opportunities
                </h1>
                <ul className="ml-3 mb-3 list-disc text-[12px]">
                  <li>Generation</li>
                  <li>Transmission</li>
                  <li>Distribution</li>
                </ul>
                <p className="mt-6">
                  Electrical power has become one of the most important commodities of our time, making grid operations more complex than ever before.
                </p>
                <p>
                  While electrification and automation have provided a reliable basis for today&apos;s energy landscape, digitization and sustainability are key to mastering these new challenges.
                </p>
              </aside>
              <aside className="basis-1/2">
                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="grid grid-cols-2 gap-x-2 w-full">
                  <img className="basis-1/2 h-" src="/pages/greenfield-1.jpg" alt="GREENFIELD IMAGE" />
                  <img className="basis-1/2 h-" src="/pages/greenfield-2.jpg" alt="GREENFIELD IMAGE" />
                </div>
                <div className="mt-12">
                  <p>
                    No matter your power challenges, we make sure to provide the right solutions to be successful every step of the way.
                  </p>
                  <p>
                    Products, solutions, and services from Faithlink cover the entire value chain in these areas of activity. We help actively shape the future of energy and make it a success story for all stakeholders.
                  </p>
                </div>
              </aside>
            </article>
            <article className="mt-48">
              <ActivityFields data={serviceOffering} />
            </article>
          </div>
        </div>
      </section>
      <SubPageNavigator leftLink="power sector" rightLink="engineering services" />
    </>
  )
}

export default PowerSector