import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function OurTeam() {


    const OurTeamDetails = [
        {
            imgUrl: "https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d618139da29c9182ea3878_team-main-02-p-500.jpg",
            name: "SALIM ANDRAOS",
            title: "Managing Partner",
            text: "Co-founder Faithlink Systems Ltd. Previous General Manager at Younes Power Systems, Business Development Manager at BEL Impex Nigeria. He holds a Degree in Business Administration from America University of Science and Technology, California, Advanced Diploma in Marketing from LCCI, London/Beirut. He has vast experience in international trade, business development and marketing.",
        },
        {
            imgUrl: "https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d618130ccc37b64e1c7b90_team-main-03-p-500.jpg",
            name: "SALIM JAZZAR",
            title: "Managing Partner",
            text: "Joined FaithLink Systems Ltd in 2017 as Executive Director, Co-founder RME Nigeria Ltd importer and supplier of electrical equipment: Founder Base Plus import/export logistics services: Founder Servicore Ltd, a professional training and certification company. Previously Head of port Operations at Advanced Logistics and Procurement Services (ALPS). A Serial entrepreneur wuth vast experience in operations, finance, import and export, production and leadership. He holds a degree in Business Administration.",
        },
        {
            imgUrl: "https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d61813fa812a72ef6163bd_team-main-01-p-500.jpg",
            name: "LAWRENCE ONYEMA",
            title: "Chief Operating Officer",
            text: "Joined FaithLink Systems Ltd in September 2023, Previous CEO of Prime Infrastructure, Chief Marketing Officer at SWAP PLC and Network Planning Manager at Vmobile(now Airtel). He has over 20 years of experience in Engineering, Operations, Business Development and Strategic Marketing. He holds a B.ENG (Electrical/Electronics) Federal University of Technology, Owerri. MBA(Int'l Business) Lincoln University, California, Alumni of Advance Management Programme, (AMP), Lagos Business School (LBS)",
        },
        {
            imgUrl: "https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d61813fa812a72ef6163bd_team-main-01-p-500.jpg",
            name: "GOPAL TRIPATHI",
            title: "Chief Technical Officer",
            text: "Joined FaithLink Systems Ltd in May 2023, Previous Technical Manager of ZTE Nigeria Ltd. He was revolving the Technical issues of Hybrid project implementation in MTN and Glo. He worked as Cluster Manager of Plug Power Energy India Ltd. Chief Technical Trainer in Ramboll Towers India Ltd. He has over 18 years experience in Engineering, Operations and Maintenance. He holds a Diploma in Electrical and Electronics.",
        },
        {
            imgUrl: "https://assets-global.website-files.com/64d0e3bd7c26d4d9227f6c99/64d61813fa812a72ef6163bd_team-main-01-p-500.jpg",
            name: "ASIM ATALF",
            title: "Financial Controller",
            text: "Mr. Asim joined Faithlink in June 2023. He is an experienced financial professional with over 19 years of expertise in Financial & Management Reporting, Strategic Planning, Budgeting & Forecasting, Financial Analysis, ERP implementation, Mergers & Acquisitions, and Regulatory Compliance. He has held senior management roles at organizations such as S&A Trading CO. Askari Bank and PwC in Pakistan. He holds a Commerce Graduate degree and is an Intermediate Level Chartered Accountant from the Institute of Chartered Accountants of Pakistan.",
        },
    ]
    function OurTeamCard({ teamData }) {
        return (teamData.map((item, index) => (
            // <div key={index} className="flex flex-col gap-y-4 relative">
            //         <div className=" min-h-[420px] relative">

            //             <img src={item.imgUrl} alt={`Image for ${item.name}`} className="mb-2" />
            //             <h3>{item.name}</h3>
            //             <p>{item.title}</p>
            //         </div>
            //         </div>

            <div key={index} className="flex flex-col gap-y-4 relative">
                <img src={item.imgUrl} alt={`Image for ${item.name}`} className="mb-2 h-[350px]" />
                <div>
                    <h3 className="text-center">{item.name}</h3>
                    <p className="text-center mb-0">{item.title}</p>
                </div>
                <div>
                    <p>{item.text}</p>
                </div>
                <div>
                    
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
            {/* <PageSubheader imgUrl="/pages/our-team.jpg" alt="Our Team Image" pageName="OUR TEAM" leadingRoutes={["homepage", "corporate"]} greenOverlay={false} /> */}
            {/* <PageSubheader imgUrl="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Team Image" pageName="OUR TEAM" leadingRoutes={["homepage", "corporate"]} greenOverlay={false} /> */}
            <PageSubheader imgUrl="/pages/teamwork-3213924_1280.jpg" alt="Our Team Image" pageName="OUR TEAM" leadingRoutes={["homepage", "corporate"]} greenOverlay={false} />

            <section className="section-top">
                <div className="container container-lg">
                    {/* flex justify-between gap-x-14 flex-col md:flex-row items-center */}
                    <article className="">
                        <h1 className="text-textGray text-[30px] text-center mb-16">
                            OUR MANAGEMENT
                        </h1>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                            <OurTeamCard teamData={OurTeamDetails} />
                        </div>
                    </article>
                </div>
            </section>
            <SubPageNavigator leftLink="our vision and values" rightLink="founder's message" />

        </>
    )
}
export default OurTeam