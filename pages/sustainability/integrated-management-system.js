import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"


function IntegratedManagementSystem() {
    return (
        <>
            <section className="">

                <Head>
                    <title>INTEGRATED MANAGEMENT SYSTEM - Faith Link Systems Limited</title>
                    <meta name="description" content="INTEGRATED MANAGEMENT SYSTEM- Faithlink Systems" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div>
                    <PageSubheader imgUrl="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Integrated Management  System Image" pageName="Integrated MANAGEMENT SYSTEM" leadingRoutes={["homepage", "sustainability"]} greenOverlay={true} />
                    {/* <PageSubheader imgUrl="https://media.istockphoto.com/id/521261573/photo/workplace-safety-handbook-manual-and-occupational-equipment-for-work-training.jpg?s=612x612&w=0&k=20&c=KG_D5v8xIfnR0jje69nQqFQYmerYBiquQrXqFLkjPHA=" alt="Integrated Management  System Image" pageName="Integrated MANAGEMENT SYSTEM" leadingRoutes={["homepage", "sustainability"]} /> */}
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

export default IntegratedManagementSystem