import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function OurVisionandValues() {


    const commonBlobStyles = {
        blob: "text-2xl text-white text-uppercase  size-[25vw]  rounded-full flex justify-center items-center mx-auto",
        articleCards: "border-t-[1px] border-l-[1px] w-[20vw] absolute bg-white p-2"
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
            <section className="section-top">
                <div className="container container-lg">
                    <article className="flex justify-between gap-x-14 flex-col md:flex-row items-center">

                        <article className="w-full">

                            <div className="relative flex">
                                <div className={`${commonBlobStyles.blob} bg-red-800 `}>
                                    <h2 className="mb-0 text-[3vw]">MISSION</h2>
                                </div>
                                <div className={`${commonBlobStyles.articleCards} left-[85%] top-[0%]`}>
                                    <h2>OUR MISSION</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum optio dicta repellendus veritatis illum mollitia nobis laboriosam consectetur? Maiores sed incidunt voluptatibus ducimus nulla cum mollitia perferendis molestias autem?</p>
                                </div>
                            </div>
                            <aside className="flex justify-around items-center">


                                <div className="relative flex">
                                    <div className={`${commonBlobStyles.blob} bg-green-400`}>
                                        <h2 className="mb-0 text-[3vw]">VALUES</h2>
                                    </div>
                                    <div className={`${commonBlobStyles.articleCards} left-[-15%] top-[-75%]`}>
                                        <h2>OUR VALUES</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum optio dicta repellendus veritatis illum mollitia nobis laboriosam consectetur? Maiores sed incidunt voluptatibus ducimus nulla cum mollitia perferendis molestias autem?</p>
                                    </div>
                                </div>
                                <div className="relative flex">
                                    <div className={`${commonBlobStyles.blob} bg-yellow-800`}>
                                        <h2 className="mb-0 text-[3vw]">VISION</h2>
                                    </div>
                                    <div className={`${commonBlobStyles.articleCards} left-[-80%] top-[0%]`}>
                                        <h2>OUR VISION</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum optio dicta repellendus veritatis illum mollitia nobis laboriosam consectetur? Maiores sed incidunt voluptatibus ducimus nulla cum mollitia perferendis molestias autem?</p>
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