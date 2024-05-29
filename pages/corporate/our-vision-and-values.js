import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"
import { ActivityFields } from '../../src/components/pages';


function OurVisionandValues() {

    const OVAVDATA = [
        {
            //   image: "/pages/service-offering-generation.jpg",
            image: "https://media.istockphoto.com/id/186226463/photo/vision-background.jpg?s=612x612&w=0&k=20&c=wIrmJyfXsjolqQGZNJ18c809kdbsJz66xjDHOxKrxNQ=",
            title: "OUR VISION",
            introText: "To be a leading Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects",
            //   introText: "To be a leading Infrastructure,"
            // text: "Faithlink provides Embedded Power, Captive Power, Step-up Transformer and Turbine Engines"
            text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
        },
        {
            //   image: "/pages/service-offering-generation.jpg",
            image: "https://images.unsplash.com/photo-1610540604745-3e96fba9ccef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "OUR MISSION",
            // text: "Faithlink provides Embedded Power, Captive Power, Step-up Transformer and Turbine Engines"
            introText: "To be a leading Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects",
            text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
        },
        {
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "OUR BUSINESS FOCUS",
            // text: "Faithlink provides Embedded Power, Captive Power, Step-up Transformer and Turbine Engines"
            introText: "Power, Telecoms and Infrastructure Development.",
            text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
        },
        {
            image: "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=1714&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "STRATEGIC THRUST",
            introText: "Do it right the first time.",
            text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
        },
    ]
    // https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg
    const OVAVDATA_ = [
        {
            //   image: "/pages/service-offering-generation.jpg",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
            title: "OUR VISION",
            introText: "To be a leading Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects",
            //   introText: "To be a leading Infrastructure,"
            // text: "Faithlink provides Embedded Power, Captive Power, Step-up Transformer and Turbine Engines"
            text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
        },
        {
            //   image: "/pages/service-offering-generation.jpg",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
            title: "OUR MISSION",
            // text: "Faithlink provides Embedded Power, Captive Power, Step-up Transformer and Turbine Engines"
            introText: "To be a leading Infrastructure, Engineering and Renewable energy company, committed to enhancing stakeholder value through quality and timely completion of projects",
            text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
            title: "OUR BUSINESS FOCUS",
            // text: "Faithlink provides Embedded Power, Captive Power, Step-up Transformer and Turbine Engines"
            introText: "Power, Telecoms and Infrastructure Development.",
            text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
            title: "STRATEGIC THRUST",
            introText: "Do it right the first time.",
            text: ["Embedded Power", "Captive Power", "Step-up Transformer", "Turbine Engines"],
        },
    ]



    function OVAVCard({ ovavData }) {
        return  (ovavData.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4 relative">
                    <div className=" min-h-[420px] relative">

                        <img src={item.image} alt={`Image for ${item.title}`} className="mb-2 h-[200px]" />
                        <h3>{item.title}</h3>
                        <p>{item.introText}</p>
                    </div>
                    </div>

        )))
    }


    
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
                    <article className="flex justify-between gap-x-14 flex-col md:flex-row items-center">
                        {/* <aside className="basis-1/2" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
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
                        <aside className="basis-1/2" data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400">
                            <div data-aos-duration="1000" data-aos="fade-left" data-aos-delay="400" className="split-page-images-container">
                                <img className="basis-1/2" src="https://images.unsplash.com/photo-1610540604745-3e96fba9ccef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="OUR VISION FIRST IMAGE" />
                                <img className="basis-1/2" src="https://media.istockphoto.com/id/186226463/photo/vision-background.jpg?s=612x612&w=0&k=20&c=wIrmJyfXsjolqQGZNJ18c809kdbsJz66xjDHOxKrxNQ=" alt="OUR VISION SECOND IMAGE" />
                            </div>
                            <div className="mt-4">
                                <p>Our business focus is on Power, Telecoms and Infrastructure Development.</p>
                                <p>Our Strategic Thrust is <strong>Do it right the first time.</strong></p>
                            </div>
                        </aside> */}
                        {/* <ActivityFields data={OVAVDATA} darkText={true} headingTitle="our vision and values" headingText="These are our vision and values" /> */}
                        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
                            <OVAVCard ovavData={OVAVDATA}  />
                        </div>
                    </article>
                </div>
            </section>
            <SubPageNavigator leftLink="about us" rightLink="our team" />
        </>
    )
}
export default OurVisionandValues