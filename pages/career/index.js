import Head from "next/head";
import PageSubheader from "../../src/components/PageSubheader";

function Career() {
    return (
        <>
            <Head>
                <title>CAREER - Faith Link Systems Limited</title>
                <meta name="description" content="CAREER" />
            </Head>
            <PageSubheader imgUrl="https://images.unsplash.com/photo-1502126324834-38f8e02d7160?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Career Image" pageName="CAREER" leadingRoutes={["homepage", "career"]} />

            <section className="section-top">
                <div className="container container-lg">
                    <article className="px-4">

                        {/* <h1 className="text-9xl text-textGray max-md:text-4xl">COMING <br /> SOON</h1> */}
                        {/* <p className="text-3xl max-md:text-sm">Unfortunately this page isn&apos;t ready yet. <br className="max-md:hidden" /> Please come back soon. There is no vacancy currently </p> */}
                        <div>
                            <h1>Let us rewrite the Nations connectivity story together.</h1>
                            <h1>JOIN US TODAY!</h1>
                            <h3><strong>FAITHLINK SYSTEMS LIMITED</strong> is the ideal incubator for the brightest minds of today and the rising stars of tomorrow in the Engineering/Telecommunications sector. Join us on a transformative journey and elevate your career to stand out as a true industry pioneer.</h3>
                        </div>
                        <div className="text-center mt-12">

                            <h2>Available Job Listings</h2>
                            <p className="text-center">Apply to join the Faithlink Systems Limited expert team</p>

                            <h3><em>No vacancy</em></h3>
                            {/* <p className="text-center">Contact: <a href="tel:+234 818 600 2214" className="text-primary">+234 818 600 0000</a>, </p>
                            <p className="text-center">Email: <a href="mailto:info@faithlinkltd.com" className="text-primary">info@faithlinkltd.com</a></p> */}
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Career