import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function PhotoGallery() {
    return (
        <>
            <Head>
                <title>Photo Gallery - Faith Link Systems Limited</title>
                <meta name="description" content="Photo Gallery" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <PageSubheader imgUrl="/pages/paas-eaas.jpg" alt="Photo Gallery Image" pageName="Photo Gallery" leadingRoutes={["homepage", "activity fields"]} /> */}
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <h1>PHOTO GALLERY</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PhotoGallery