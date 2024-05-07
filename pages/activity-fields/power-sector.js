import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
function PowerSector() {
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
                <ul className="text-[12px]">
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
                    Products, solutions, and services from Faithlink cover the entire value chain in these areas of activity. We help actively shape tthe future of energy and makke it a success story for all stakeholders.
                  </p>
                </div>
              </aside>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default PowerSector