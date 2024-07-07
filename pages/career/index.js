import Head from "next/head";
import PageSubheader from "../../src/components/PageSubheader";

function Career() {
    return (
        <>
            <Head>
                <title>CAREER - Faith Link Systems Limited</title>
                <meta name="description" content="CAREER" />
            </Head>
            <PageSubheader imgUrl="_career_.jpg" alt="Career Image" pageName="CAREER" leadingRoutes={["homepage", "career"]} />
            <section className="section-top">
                <div className="container container-lg">
                    <article className="px-4">
                        <div>
                            <h1>Let us rewrite the Nations connectivity story together.</h1>
                            <h1>JOIN US TODAY!</h1>
                            <h3><strong>FAITHLINK SYSTEMS LIMITED</strong> is the ideal incubator for the brightest minds of today and the rising stars of tomorrow in the Engineering/Telecommunications sector. Join us on a transformative journey and elevate your career to stand out as a true industry pioneer.</h3>
                        </div>
                        <div className="text-center mt-12">
                            <h2>Available Job Listings</h2>
                            <p className="text-center">Apply to join the Faithlink Systems Limited expert team</p>
                            <h3><em>No vacancy</em></h3>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Career