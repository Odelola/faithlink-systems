import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function OurVisionandValues() {


    const commonBlobStyles = {
        blob: "text-2xl text-white text-uppercase  size-[15vw]  rounded-full flex justify-center items-center mx-auto",
        heading: "mb-0 text-[2vw]",
        articleCards: "border-t-[1px] border-l-[1px] w-[15vw] absolute bg-white"
    }

    return (
        <>
            <Head>
                <title>OUR VISION AND VALUES - Faith Link Systems Limited</title>
                <meta name="description" content="OUR VISION AND VALUES" />

            </Head>
            {/* <PageSubheader imgUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Vision and Values Image" pageName="OUR VISION AND VALUES" leadingRoutes={["homepage", "corporate"]} /> */}
            {/* <PageSubheader imgUrl="/pages/our-vision-and-values-4.jpg" alt="Our Vision and Values Image" pageName="OUR VISION AND VALUES" leadingRoutes={["homepage", "corporate"]} /> */}
            <PageSubheader imgUrl="/pages/_our-vision-and-values_.jpg" alt="Our Vision and Values Image" pageName="OUR VISION AND VALUES" leadingRoutes={["homepage", "corporate"]} />
            <section className="section-top min-h-[125vh]">
                <div className="container container-lg">
                    <article className="flex justify-between gap-x-14 flex-col md:flex-row items-center">

                        <article className="w-full relative">

                                <div className={`${commonBlobStyles.articleCards} left-[75%] top-[0%]`}>
                                    <div className="p-2">
                                        
                                    <h2>OUR MISSION</h2>
                                    <p className="mb-0">to provide exceptional service delivery to customers that is infused with high level of professionalism, safety and operational efficiency </p>
                                    </div>
                                </div>
                                    <div className={`${commonBlobStyles.articleCards} left-[-5%] top-[35%]`}>
                                        <div className="p-2">

                                        <h2>OUR VALUES</h2>
                                        <p className="mb-0">Being a team of industry specialists operating within a privately owned company, effectively serving a global market while maintaining a local presence. </p>
                                        </div>
                                    </div>
                                    <div className={`${commonBlobStyles.articleCards} left-[50%] top-[110%] -translate-x-1/2`}>
                                        <div className="p-2">

                                        <h2>OUR VISION</h2>
                                        <p className="mb-0">To be a leading Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects</p>
                                        </div>
                                    </div>
                            <div className="relative flex">
                                    {/* <div className={`${commonBlobStyles.articleCards} left-[-15%] top-[-75%]`}> */}
                                <div className={`${commonBlobStyles.blob} bg-red-800 `}>
                                    <h2 className={`${commonBlobStyles.heading}`}>MISSION</h2>
                                </div>
                            </div>
                            <aside className="flex justify-evenly items-center mt-12">
                                <div className="relative flex">
                                    <div className={`${commonBlobStyles.blob} bg-green-400`}>
                                        <h2 className={`${commonBlobStyles.heading}`}>VALUES</h2>
                                    </div>
                                </div>
                                <div className="relative flex">
                                    <div className={`${commonBlobStyles.blob} bg-yellow-800`}>
                                        <h2 className={`${commonBlobStyles.heading}`}>VISION</h2>
                                    </div>
                                </div>
                            </aside>
                        </article>

                    </article>
                </div>
            </section>
            <SubPageNavigator leftLink="about us" rightLink="our team" />
        </>
    )
}
export default OurVisionandValues