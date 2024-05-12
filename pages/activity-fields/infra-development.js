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
      <PageSubheader imgUrl="/pages/power-sector.jpg" alt="https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" pageName="infra-development" leadingRoutes={["homepage", "activity fields"]} />
      <section className="section-top">
        <div className="container">
          <div className="container container-lg">
            <article className="flex gap-x-16 max-md:gap-x-0 max-md:flex-col">
              <aside className="basis-1/2">
                <h1 className="aos-init aos-animate text-[20px] text-textGray uppercase">
                  INFRA-DEVELOPMENT
                </h1>
              </aside>
              <aside className="basis-1/2">
               
              </aside>
            </article>
          </div>
        </div>
      </section>
      <SubPageNavigator leftLink="power sector" rightLink="engineering services" />
    </>
  )
}

export default InfraDevelopment