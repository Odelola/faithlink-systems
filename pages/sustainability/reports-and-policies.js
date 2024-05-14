import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"


function ReportsAndPolicies() {
    return (
        <>
            <section className="">

                <Head>
                    <title>REPORTS AND POLICIES - Faith Link Systems Limited</title>
                    <meta name="description" content="REPORTS AND POLICIES" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div>XX
                    {/* <PageSubheader imgUrl="https://cengizholding.com.tr/Content/images/subpage-promo/baskanin-mesaji.jpg" alt="SAFE WORKPLACE Image" pageName="safe workplace" leadingRoutes={["homepage",]} /> */}
                    <PageSubheader imgUrl="https://media.istockphoto.com/id/521261573/photo/workplace-safety-handbook-manual-and-occupational-equipment-for-work-training.jpg?s=612x612&w=0&k=20&c=KG_D5v8xIfnR0jje69nQqFQYmerYBiquQrXqFLkjPHA=" alt="Integrated Management  System Image" pageName="Integrated management system" leadingRoutes={["homepage", "sustainability"]} />
                    <section className="pt-24 pb-0">
                        <div className="container container-lg">
                        </div>
                    </section>
                </div>
            </section>
            <SubPageNavigator leftLink="safe workplace" rightLink="integrated management system" />

        </>
    )
}

export default ReportsAndPolicies