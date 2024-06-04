import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator";

function InfraDevelopment() {
  return (
    <>
      <Head>
        <title>INFRA DEVELOPMENT - Faith Link Systems Limited</title>
        <meta name="description" content="INFRA DEVELOPMENT" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <PageSubheader imgUrl="https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="INFRASTRUCTURE DEVELOPMENT image" pageName="infrastructure development" leadingRoutes={["homepage", "activity fields"]} greenOverlay={false} />
      {/* <PageSubheader imgUrl="/pages/_infra development_.jpg" alt="INFRASTRUCTURE DEVELOPMENT image" pageName="infrastructure development" leadingRoutes={["homepage", "activity fields"]} greenOverlay={false} /> */}
      <section className="section-top">
        <div className="container">
          <div className="container container-lg">
            <article className="flex  flex-row flex-wrap gap-16 max-md:gap-x-0 max-md:flex-col">
              <aside className="basis-[45%]" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
                <h1 className="aos-init aos-animate text-[20px] text-textGray max-md:w-full">
                  INFRASTRUCTURE DEVELOPMENT
                </h1>
                <p className="mt-6">
                  In this division, we execute various projects, some of the projects includes:
                </p>
                <ul className="ml-3 mb-4 list-disc text-[14px]">
                  <li> Road Construction And Maintenance </li>
                  <li>Building construction and maintenance </li>
                  <li>Drainage constructions</li>
                  <li>Real Estate Development and projects</li>
                  <li>Internal And external electrification works</li>
                  <li>Procurements and General supplies</li>
                </ul>
                <p>Our philosophy is to constantly fulfil the expectation of our customers by delivering services that are top notch and above industry standard</p>
                <div data-aos-duration="1000" data-aos="fade-right" data-aos-delay="400" className="flex h-[150px] gap-x-2">
                  <img className="basis-1/2" src="/pages/infra-development-1.jpg" alt="INFRASTRUCTURE DEVELOPMENT FIRST IMAGE" />
                  <img className="basis-1/2" src="/pages/infra-development-2.jpg" alt="INFRASTRUCTURE DEVELOPMENT SECOND IMAGE" />
                </div>
              </aside>
              <aside className="basis-[45%]" data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400">
                <img className="w-full h-[300px] mb-4" src="/pages/_house-construction_.jpg" alt="INFRASTRUCTURE DEVELOPMENT IMAGE" />
                <p>Our Infrastructure development strategy involves the planning, design, and construction of essential facilities and systems that support economic growth and quality of life. The various techniques and approaches we use  in the development of infrastructure includes: Project Management Techniques, Financing Mechanisms and Innovative Construction Techniques</p>
              </aside>
            </article>
          </div>
        </div>
      </section >
      <SubPageNavigator leftLink="power sector" rightLink="telecoms sector" />
    </>
  )
}

export default InfraDevelopment