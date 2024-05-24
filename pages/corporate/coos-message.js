import Head from "next/head";
import PageSubheader from "../../src/components/PageSubheader";
import SubPageNavigator from "../../src/components/SubPageNavigator"


function CoosMessage() {
    return (
        <>
            <Head>
                <title>COO&apos;S MESSAGE - Faith Link Systems Limited</title>
                <meta name="description" content="MESSAGE FROM THE COO" />
            </Head>
            <PageSubheader imgUrl="https://cengizholding.com.tr/content/images/uploads/baskanin-mesaji,32_big,1345_big.jpg" pageName="COO's message" alt="COO's message" leadingRoutes={["homepage", "corporate"]} greenOverlay={false} />
            <section className="section-top">
                <div className="container text-justify">
                    <div className="container container-lg">
                        <article className="flex gap-x-16 max-md:gap-x-0 max-md:flex-col">
                            <aside className="basis-1/2 text-justify" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
                                <h1 className="aos-init aos-animate mb-16 text-[20px] text-textGray" data-aos-duration="1000" data-aos="fade-down" data-aos-delay="300">
                                    GIANT INVESTMENTS
                                    TOWARDS THE LEAGUE OF GLOBAL GIANTS...
                                </h1>
                                <p>
                                    My Vision of Faithlink is To be a leading Power Infrastructure,
                                    Engineering and Renewable energy company,
                                    committed to enhancing stakeholder value
                                    through quality and timely completion of
                                    projects.
                                </p>
                                <p>
                                    I created this company To provide exceptional service delivery to
                                    customers that is infused with high level of
                                    professionalism, safety and operational
                                    efficiency.
                                </p>
                                <p>
                                    My Vision of Faithlink is To be a leading Power Infrastructure,
                                    Engineering and Renewable energy company,
                                    committed to enhancing stakeholder value
                                    through quality and timely completion of
                                    projects.
                                </p>
                                <p>
                                    I created this company To provide exceptional service delivery to
                                    customers that is infused with high level of
                                    professionalism, safety and operational
                                    efficiency.
                                </p>
                                <p>
                                    My Vision of Faithlink is To be a leading Power Infrastructure,
                                    Engineering and Renewable energy company,
                                    committed to enhancing stakeholder value
                                    through quality and timely completion of
                                    projects.
                                </p>
                                <p>
                                    I created this company To provide exceptional service delivery to
                                    customers that is infused with high level of
                                    professionalism, safety and operational
                                    efficiency.
                                </p>
                                <div className="text-textGray mt-12 font-medium">
                                    <p className="text-[20px]">LAWRENCE ONYEMA</p>
                                    <p className="text-[14px]">Chief Operating Officer</p>
                                </div>
                            </aside>
                            <aside>
                                <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400">
                                    <img className="w-[500px] h-[700px]" src="/pages/president.jpg" alt="COO'S MESSAGE" />
                                </div>
                            </aside>
                        </article>
                    </div>
                </div>
            </section>
            <SubPageNavigator leftLink="our team" rightLink="milestones" />

        </>
    )
}

export default CoosMessage