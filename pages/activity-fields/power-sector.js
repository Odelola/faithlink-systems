import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import { ActivityFields } from '../../src/components/pages';
import SubPageNavigator from "../../src/components/SubPageNavigator";

function PowerSector() {
  const serviceOffering = [
    {
      image: "/pages/service-offering-generation.jpg",
      title: "GENERATION",
      introText: "We provide these generation activities",
      text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
    },
    {
      image: "/pages/service-offering-transmission.jpg",
      title: "TRANSMISSION",
      introText: "We provide these transmission activities",
      text: ["Transmission Cables", "Soil test and Technical Site Survey", "760KV Super Grid", "330KV lines", "132KV lines", "Injection Substation", "Pylons", "Switch Gears", "Civil works"]
    },
    {
      image: "/pages/service-offering-distribution.jpg",
      title: "DISTRIBUTION",
      introText: "We provide these distribution activities",
      text: ["Step-down Transformers", "33/11kv Injector Substations", "Smart Prepaid Meters", "Distribution power lines", "Distribution fuse Assemblies", "Transformer Refurbishment ", "Feeder Pillars", "Substation fencing", "33/11kv Feeder Pillars", "Civil works"]

    },
    {
      image: "/pages/service-offering-automation-and-control.jpg",
      title: "AUTOMATION / CONTROL",
      introText: "We provide these for automation/control",
      text: ["SCADA System", "ATS", "AMF", "IPMS", "Energy Management", "Energy Optimization"]
    },
  ]
  return (
    <>
      <Head>
        <title>POWER SECTOR - Faith Link Systems Limited</title>
        <meta name="description" content="POWER SECTOR" />
      </Head>
      <PageSubheader imgUrl="/pages/_power sector_.jpg" alt="Power Sector Image" pageName="power sector" leadingRoutes={["homepage", "activity fields"]} />

      <section className="section-top">
        <div className="container">
          <div className="container container-lg">
            <article className="flex gap-x-16 max-md:gap-x-0 max-md:flex-col">
              <aside className="basis-1/2" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
                <h1 className="aos-init aos-animate text-[20px] text-textGray uppercase">
                  Demanding challenges, promising opportunities
                </h1>
                <div data-aos-duration="1000" data-aos="fade-right" data-aos-delay="400" className="grid w-full">
                  <img className="w-full h-[300px]" src="/pages/power-sector-big.jpg" alt="POWER SECTOR IMAGE" />
                </div>
              </aside>
              <aside className="basis-1/2" data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400">
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
