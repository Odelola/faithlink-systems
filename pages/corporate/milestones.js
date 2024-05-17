import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"


function Milestones() {
    const MilestonesData = [
        {
            "imgUrl": "/pages/milestones/milestones-0.jpg",
            "year/client": "",
            "description": "Grid Substations / Meters 178 Sites 55kva Turn-Key Project Supply Installation, integration to the National GRID, Synchronization",
        },
        {
            "imgUrl": "/pages/milestones/milestones-1.jpg",
            "year/client": "",
            "description": "Substation 750KVa/11kv Turn-Key Project Supply Installation, integration to the National GRID",
        },
        {
            "imgUrl": "/pages/milestones/milestones-2.jpg",
            "year/client": "",
            "description": "Substation 500kva/33kv Turn-Key Project Supply Installation, integration to the National GRID",
        },
        {
            "imgUrl": "/pages/milestones/milestones-3.jpg",
            "year/client": "",
            "description": "Internal Electrification Work at Black diamond Hotel",
        },
        {
            "imgUrl": "/pages/milestones/milestones-1.jpg",
            "year/client": "",
            "description": "Internal & External Electrification Work for existing & new Warehouse Facility 300kva Substation",
        },
        {
            "imgUrl": "/pages/milestones/milestones-2.jpg",
            "year/client": "",
            "description": "Transformers Rehabilitation 50kva / repairs/ and testing (457Unit)",
        },
        {
            "imgUrl": "/pages/milestones/milestones-0.jpg",
            "year/client": "",
            "description": "Substation 750KVa/11kv Turn-Key Project Supply Installation, integration to the National GRID",
        },
    ]

    const MilestonesCard = ({ milestonesData }) => {
        return milestonesData.map((item, index) => {
            console.log(index)
            return (
                // <div className={`timeline__item aos-init aos-animate ${index % 2 == 0 ? "row-reverse": "row"}`} data-aos-duration="1000" data-aos="fade-left" data-aos-delay="300" key={index}>
                <div className={`relative flex aos-init aos-animate [&:nth-child(even)]:flex-row-reverse`} data-aos-duration="1000" data-aos="fade-left" data-aos-delay="300" key={index}>
                    <div className={`flex flex-col w-[450px]`}>
                        {/* <div className={`flex flex-col w-[450px] relative before:absolute before:content-[""] before:w-[130px] before:h-[1px] before:top-[250px] before:border-primary before:border before:border-dashed ${index % 2 == 0 ? "before:left-[100%]" : "before:right-[100%]"}`}> */}
                        <div className="h-[250px] mb-10 relative">
                            <img src={item.imgUrl} className="w-full h-full after:" />
                            <div className={`absolute w-[130px] h-[1px] right-[100%] border-primary border border-dashed ${index % 2 == 0 ? "left-[100%] before:left-[calc(100%-5px)]" : "right-[100%] before:right-[5px]"} before:relative before:block before:content-[""] before:w-[10px] before:h-[10px] before:top-[-5px] before:bg-primary z-[2] `}>

                            </div>
                        </div>
                        <div>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            )
        })

    }



    return (
        <>
            <Head>
                <title>MILESTONES - Faith Link Systems Limited</title>
                <meta name="description" content="Milestones" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>1
            {/* <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="Milestones Image" pageName="MILESTONES" leadingRoutes={["homepage", "activity fields"]} /> */}
            <PageSubheader imgUrl="https://media.istockphoto.com/id/528723134/photo/milestone-signpost.jpg?s=612x612&w=0&k=20&c=gmxRBVYPYmej1G23AfHZwSIVIIHpJBdLPKRg3BA0s_A=" alt="Milestones Image" pageName="MILESTONES" leadingRoutes={["homepage", "activity fields"]} greenOverlay={true} />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <div className="mb-20">
                            <h1 className="aos-init aos-animate text-[32px] text-textGray max-md:w-full text-center">
                                OVER 18 YEARS OF EXPERIENCE
                            </h1>
                        </div>
                        <article className={`before:block before:absolute before:content-[""] before:left-1/2 before:top-[-20px]  before:w-3 before:h-3 before:bg-primary before:-translate-x-1/2 before:rotate-45  after:absolute after:top-0 after:left-1/2 after:context-[''] after:-translate-x-1/2 after:border after:border-dashed after:border-primary after:w-[1px] after:h-full flex flex-col relative`}>
                            <MilestonesCard milestonesData={MilestonesData} />
                        </article>
                    </div>
                </div>
            </section>
            <SubPageNavigator leftLink="coo's message" rightLink="milestones" />

        </>
    )
}
export default Milestones