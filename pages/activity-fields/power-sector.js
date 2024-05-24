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
      // text: "Faithlink provides Embedded Power, Captive Power, Step-up Transformer and Turbine Engines"
      introText: "We provide these generation activities",
      text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
    },
    {
      //   image: "/pages/service-offering-transmission.jpg",
      image: "https://images.unsplash.com/photo-1588339251392-e1405faa28bd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "TRANSMISSION",
      // text: "This consists of Transmission Cables, Soil test and Technical Site Survey, 760KV Super Grid, 330KV lines, 132KV lines, "
      introText: "We provide these transmission activities",
      text: ["Transmission Cables", "Soil test and Technical Site Survey", "760KV Super Grid", "330KV lines", "132KV lines", "InjectionSubstation", "Pylons", "Switch Gears", "Civil works"]
    },
    {
      //   image: "/pages/service-offering-distribution.jpg",
      image: "https://images.unsplash.com/photo-1591164811435-2b8a547039de?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "DISTRIBUTION",
      // text: "Focusing its energy on distribution, Faithlink provides Soil test and Technical Site Survey, Step-down Transformers, 33/11kv Injector Substations, Smart Prepaid Meters"
      introText: "We provide these distribution activities",
      text: ["Soil test and Technical Site Survey", "Step-down Transformers", "33/11kv Injector Substations", "Smart Prepaid Meters", "Distribution power lines", "Distribution fuse Assemblies", "Transformer Refurbishment ", "Feeder Pillars", "Substation fencing", "33/11kv Feeder Pillars", "Civil works"]

    },
    {
      //   image: "/pages/service-offering-automation-and-control.jpg",
      image: "/pages/service-offering-automation-and-control-2.jpg",
      title: "AUTOMATION / CONTROL",
      // text: "In Automation and Control, We deal with SCADA System, ATS, AMF, IPMS, Energy Management and Energy Optimization"
      introText: "We provide these for automation/control",
      text: ["SCADA System", "ATS", "AMF", "IPMS", "Energy Management", "Energy Optimization"]
    },
  ]
  return (
    <>
      <Head>
        <title>POWER SECTOR - Faith Link Systems Limited</title>
        <meta name="description" content="POWER SECTOR" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <PageSubheader imgUrl="/pages/power-sector.jpg" alt="Power Sector Image" pageName="power sector" leadingRoutes={["homepage", "activity fields"]} /> */}
      <PageSubheader imgUrl="https://images.unsplash.com/photo-1509390559807-3144e7d29097?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Power Sector Image" pageName="power sector" leadingRoutes={["homepage", "activity fields"]} greenOverlay={false} />

      <section className="section-top">
        <div className="container">
          <div className="container container-lg">
            <article className="flex gap-x-16 max-md:gap-x-0 max-md:flex-col">
              <aside className="basis-1/2">
                <h1 className="aos-init aos-animate text-[20px] text-textGray uppercase">
                  Demanding challenges, promising opportunities
                  {/* <br />
                Electrical power has become one of the most important commodities of our time, making grid operations more complex than ever before.
                <br />
                While electrification and automation have provided a reliable basis for today&apos;s energy landscape, digitization and sustainability are key to mastering these new challenges. */}

                </h1>
                {/* <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="grid grid-cols-2 gap-x-2 w-full"> */}
                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="grid w-full">

                  <img className="w-full h-[300px]" src="/pages/power-sector-big.jpg" alt="POWER SECTOR IMAGE" />
                  {/* <img className="basis-1/2" src="/pages/greenfield-1.jpg" alt="GREENFIELD IMAGE" /> */}
                  {/* <img className="basis-1/2" src="/pages/greenfield-2.jpg" alt="GREENFIELD IMAGE" /> */}
                </div>
                {/* <p className="mt-6">
                  Electrical power has become one of the most important commodities of our time, making grid operations more complex than ever before.
                </p>
                <p>
                  While electrification and automation have provided a reliable basis for today&apos;s energy landscape, digitization and sustainability are key to mastering these new challenges.
                </p> */}
              </aside>
              <aside className="basis-1/2">
                {/* <div className="mt-12"> */}
                <div>
                  <p className="mt-6">
                    Electrical power has become one of the most important commodities of our time, making grid operations more complex than ever before.
                  </p>
                  <p>
                    While electrification and automation have provided a reliable basis for today&apos;s energy landscape, digitization and sustainability are key to mastering these new challenges.
                  </p>
                  <p>
                    No matter your power challenges, we make sure to provide the right solutions to be successful every step of the way.
                  </p>
                  <p>
                    Products, solutions, and services from Faithlink cover the entire value chain in these areas of activity. We help actively shape the future of energy and make it a success story for all stakeholders.
                  </p>
                </div>
              </aside>
            </article>
            <article className="mt-24">
              <ActivityFields data={serviceOffering} />
            </article>
          </div>
        </div>
      </section>
      <SubPageNavigator leftLink="power sector" rightLink="infra development" />
    </>
  )
}

export default PowerSector
