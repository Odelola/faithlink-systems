import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function OurStory() {
    return (
        <>
            <Head>
                <title>OUR STORY - Faith Link Systems Limited</title>
                <meta name="description" content="OUR STORY" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <PageSubheader imgUrl="https://images.unsplash.com/photo-1524083966561-64821ef4506c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Story Image" pageName="OUR STORY" leadingRoutes={["homepage", "corporate"]} />

            {/* <SubPageNavigator leftLink="engineering services" rightLink="fibre optics" /> */}
        </>
    )
}
export default OurStory