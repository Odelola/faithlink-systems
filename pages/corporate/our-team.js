import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function OurTeam() {


    const OurTeamDetails = [
        {
            imgUrl: "https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d618139da29c9182ea3878_team-main-02-p-500.jpg",
            title: "JACK OLOYEDE",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illum est nesciunt tempora facere! Assumenda fugiat et minima vero rerum.",
        },
        {
            imgUrl: "https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d618130ccc37b64e1c7b90_team-main-03-p-500.jpg",
            title: "MICHELLE KEHINDE",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illum est nesciunt tempora facere! Assumenda fugiat et minima vero rerum.",
        },
        {
            imgUrl: "https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d61813fa812a72ef6163bd_team-main-01-p-500.jpg",
            title: "NATASHA OGUNDIRAN",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illum est nesciunt tempora facere! Assumenda fugiat et minima vero rerum.",
        },
    ]
    function OurTeamCard({ teamData }) {
        return  (teamData.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4 relative">
                    <div className=" min-h-[420px] relative">

                        <img src={item.imgUrl} alt={`Image for ${item.title}`} className="mb-2" />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                    </div>

        )))
    }
    return (
        <>
            <Head>
                <title>OUR TEAM - Faith Link Systems Limited</title>
                <meta name="description" content="OUR TEAM" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <PageSubheader imgUrl="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Team Image" pageName="OUR TEAM" leadingRoutes={["homepage", "corporate"]} /> */}
            <PageSubheader imgUrl="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Team Image" pageName="OUR TEAM" leadingRoutes={["homepage", "corporate"]} greenOverlay={false} />

            <section className="section-top">
                <div className="container container-lg">
                {/* flex justify-between gap-x-14 flex-col md:flex-row items-center */}
                    <article className="">
                        <h1 className="text-textGray text-[30px] text-center">
                            OUR MANAGEMENT
                        </h1>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                            <OurTeamCard teamData={OurTeamDetails}  />
                        </div>
                    </article>
                </div>
            </section>
            <SubPageNavigator leftLink="our vision and values" rightLink="coo's message" />

        </>
    )
}
export default OurTeam