import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function OurVisionandValues() {
    return (
        <>
            <Head>
                <title>OUR VISION AND VALUES - Faith Link Systems Limited</title>
                <meta name="description" content="OUR VISION AND VALUES" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <PageSubheader imgUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Vision and Values Image" pageName="OUR VISION AND VALUES" leadingRoutes={["homepage", "corporate"]} /> */}
            <PageSubheader imgUrl="/pages/our-vision-and-values-4.jpg" alt="Our Vision and Values Image" pageName="OUR VISION AND VALUES" leadingRoutes={["homepage", "corporate"]} greenOverlay={false} />
            <section className="section-top">
                <div className="container container-lg">
                    <article className="flex justify-between gap-x-14 flex-col md:flex-row items-center ">
                        <aside className="basis-1/2">
                            <h1 className="text-textGray text-[20px]">
                                OUR VISION
                            </h1>
                            <p>
                                To be a leading Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects
                            </p>
                            <h1 className="text-textGray text-[20px]">
                                OUR MISSION
                            </h1>
                            <p>
                                To be a leading Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects
                            </p>
                        </aside>
                        <aside className="basis-1/2">
                            <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="flex h-[150px] gap-x-2">
                                <img className="basis-1/2" src="https://images.unsplash.com/photo-1610540604745-3e96fba9ccef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="OUR VISION FIRST IMAGE" />
                                <img className="basis-1/2" src="https://media.istockphoto.com/id/186226463/photo/vision-background.jpg?s=612x612&w=0&k=20&c=wIrmJyfXsjolqQGZNJ18c809kdbsJz66xjDHOxKrxNQ=" alt="OUR VISION SECOND IMAGE" />
                            </div>
                            <div className="mt-4">
                            <p>Our business focus is on Power, Telecoms and Infrastructure Development.</p>
                            <p>Our Strategic Thrust is <strong>Do it right the first time.</strong></p>
                            </div>
                        </aside>
                    </article>
                </div>
            </section>
            <SubPageNavigator leftLink="about us" rightLink="our team" />
        </>
    )
}
export default OurVisionandValues