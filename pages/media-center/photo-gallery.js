import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"

function PhotoGallery() {

    const PhotoGalleryCard = ({ galleryDetail }) => {
        return(
            galleryDetail.map((item, index) => {
                return(
                    <p key={index}>mallam</p>
                )
            })
        )
    }
    return (
        <>
            <Head>
                <title>PHOTO GALLERY - Faith Link Systems Limited</title>
                <meta name="description" content="Photo Gallery" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <PageSubheader imgUrl="https://images.unsplash.com/photo-1547296017-978c31e1c124?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photo Gallery Image" pageName="Photo Gallery" leadingRoutes={["homepage", "activity fields"]} pageText="You can download the images of our plants in high -resolution JPEG FORMAT" />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <article className="grid grid-cols-5">

                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PhotoGallery