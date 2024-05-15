import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function OurTeam() {
    return (
        <>
            <Head>
                <title>OUR TEAM - Faith Link Systems Limited</title>
                <meta name="description" content="OUR TEAM" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <PageSubheader imgUrl="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Team Image" pageName="OUR TEAM" leadingRoutes={["homepage", "corporate"]} /> */}
            <PageSubheader imgUrl="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Team Image" pageName="OUR TEAM" leadingRoutes={["homepage", "corporate"]} greenOverlay={true} />
            <SubPageNavigator leftLink="our vision and values" rightLink="coo's message" />
        
        </>
    )
}
export default OurTeam