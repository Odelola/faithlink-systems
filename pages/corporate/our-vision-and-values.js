import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function OurVisionandValues() {


    const commonBlobStyles = {
        blob: "text-2xl text-white text-uppercase  size-[15vw]  rounded-full flex justify-center items-center mx-auto max-slg:size-[20vw] max-sm:mx-0 max-sm:size-[25vw]",
        heading: "mb-0 text-[2vw]",
        articleCards: "w-[15vw] max-xl:w-[20vw] absolute bg-white max-slg:w-[30vw] max-sm:w-[60vw] max-sm:left-[30vw]"
    }

    return (
        <>
            <Head>
                <title>OUR VISION AND VALUES - Faith Link Systems Limited</title>
                <meta name="description" content="OUR VISION AND VALUES" />

            </Head>
            <PageSubheader imgUrl="/pages/_our-vision-and-values_.jpg" alt="Our Vision and Values Image" pageName="OUR VISION AND VALUES" leadingRoutes={["homepage", "corporate"]} />
            <section className="section-top min-h-[125vh]">
                <div className="container w-[90vw]">
                    <article className="flex justify-between gap-x-14 flex-col md:flex-row items-center">

                        <article className="w-full relative">

                            <div className={`${commonBlobStyles.articleCards} left-[65%] top-[0%] max-slg:w-[25vw]`}>
                                <div className="p-2">

                                    <h2>OUR MISSION</h2>
                                    <p className="mb-0 font-extrabold">To provide exceptional service delivery to customers that is infused with high level of professionalism, safety and operational efficiency </p>
                                </div>
                            </div>
                            {/* <div className={`${commonBlobStyles.articleCards} left-[20%] top-[25%] max-xl:left-[15%] max-sxl:left-[5%] max-sxl:top-[10%]  max-sxl:w-[25vw] max-slg:left-[0%] max-slg:top-[40%]`}> */}
                            <div className={`${commonBlobStyles.articleCards} left-[0%] top-[60%] max-xl:left-[15%]max-sxl:w-[25vw] max-slg:left-[0%] max-slg:top-[40%]`}>
                                <div className="p-2">

                                    <h2>OUR VALUES</h2>
                                    <p className="mb-0 font-extrabold">Being a team of industry specialists operating within a privately owned company, effectively serving a global market while maintaining a local presence. </p>
                                </div>
                            </div>
                            {/* <div className={`${commonBlobStyles.articleCards} left-[95%] top-[50%] -translate-x-1/2 max-sxl:top-[65%] max-slg:left-[80%] max-slg:w-[25%] max-slg:top-[70%] max-sm:translate-x-0 max-sm:top-[80%]`}> */}
                            <div className={`${commonBlobStyles.articleCards} left-[90%] top-[65%] -translate-x-1/2 max-sxl:top-[65%] max-slg:left-[80%] max-slg:w-[25%] max-slg:top-[70%] max-sm:translate-x-0 max-sm:top-[80%]`}>
                                <div className="p-2">

                                    <h2>OUR VISION</h2>
                                    <p className="mb-0 font-extrabold">To be a leading Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects</p>
                                </div>
                            </div>
                            <div className="relative flex">
                                {/* <div className={`${commonBlobStyles.articleCards} left-[-15%] top-[-75%]`}> */}
                                <div className={`${commonBlobStyles.blob} bg-red-800 `}>
                                    <h2 className={`${commonBlobStyles.heading}`}>MISSION</h2>
                                </div>
                            </div>
                            <aside className="flex justify-evenly items-center mt-[20vh] max-xl:justify-center max-xl:gap-x-[15vw] max-slg:flex-col max-slg:mt-[10vh] max-slg:gap-y-[10vh] max-sm:items-start max-sm:mt-[25vh] max-sm:gap-y-[25vh]">
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