import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function VideoGallery() {
    return (
        <>
            <Head>
                <title>Video Gallery - Faith Link Systems Limited</title>
                <meta name="description" content="Video Gallery" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="Video Gallery Image" pageName="Video Gallery" leadingRoutes={["homepage", "activity fields"]} /> */}
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <h1>VIDEO GALLERY</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default VideoGallery