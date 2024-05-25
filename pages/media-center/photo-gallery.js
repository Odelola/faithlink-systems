import Head from "next/head"
import { useState } from "react";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import PageSubheader from "../../src/components/PageSubheader"
import SubPageNavigator from "../../src/components/SubPageNavigator"
import {
    Download,
    Thumbnails,
    Zoom,
} from 'yet-another-react-lightbox/plugins';

function PhotoGallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1);
    const galleryData = [
        {
            category: "",
            src: "/pages/photo-gallery/IMG-20240425-WA0041.jpg",
            title: "First Site",
        },
        {
            category: "",
            src: "/pages/photo-gallery/IMG-20240425-WA0048.jpg",
            title: "Second Site",
        },
        {
            category: "",
            src: "/pages/photo-gallery/IMG-20240425-WA0053.jpg",
            title: "Third Site",
        },
        {
            category: "",
            src: "/pages/photo-gallery/IMG-20240425-WA0054.jpg",
            title: "Fourth Site",
        },
        {
            category: "",
            src: "/pages/photo-gallery/IMG-20240425-WA0055.jpg",
            title: "Fifth Site",
        },
    ]

    // https://images.unsplash.com/photo-1623150502742-6a849aa94be4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    const PhotoGalleryCard = ({ galleryDetail }) => {
        return (
            galleryDetail.map((item, index) => {
                return (
                    <div className="flex flex-col lg:border-[#ccdbe7] border-r max-md:border-r-0 [&:nth-child(5n)]:border-r-0 p-7  " data-filter={item.category} key={index} onClick={() => { setOpen(prev => prev = true); setIndex(prev => prev = index) }}>
                        <div className="flex justify-center items-center min-h-32  overflow-hidden mb-4 relative group">
                            <a href="javascript:;" data-fancybox="gallery" data-src={item.src}>
                                <img src={item.src} alt={item.title} loading="lazy" className="group-hover:scale-110" />
                            </a>
                        </div>
                        <h3 className="text-textGray">{item.title.toUpperCase()}</h3>
                        <div className="logos__action">
                            <a href={item.src} download="" className="flex justify-center items-center w-28 h-8 border border-secondary text-secondary fill-secondary hover:bg-secondary hover:text-white gap-x-4 hover:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                    <path d="M4.94778 8.66961C5.08829 8.80991 5.2807 8.88795 5.48995 8.88976H5.49626C5.70504 8.88976 5.90657 8.81036 6.04965 8.67187L8.4133 6.39168C8.76259 6.04274 8.67328 5.59771 8.40489 5.33855C8.13649 5.07938 7.67522 4.99412 7.31167 5.33313L6.27736 6.33101V0.749986C6.27736 0.336309 5.92854 0 5.5 0C5.07146 0 4.72264 0.336309 4.72264 0.749986V6.33123L3.68599 5.33133C3.32618 4.99389 2.86397 5.0796 2.59511 5.339C2.32601 5.59817 2.23671 6.04297 2.58903 6.39394L4.94755 8.66961H4.94778Z" fill="#75BD59"></path>
                                    <path d="M10.2226 7.39182C9.79409 7.39182 9.44527 7.72812 9.44527 8.1418V8.97164C9.44527 9.81433 8.73477 10.4998 7.86132 10.4998H3.13868C2.26523 10.4998 1.55473 9.81433 1.55473 8.97164V8.1418C1.55473 7.72812 1.20614 7.39182 0.777364 7.39182C0.348587 7.39182 0 7.72835 0 8.14203V8.97186C0 10.6417 1.40767 12 3.13868 12H7.86132C9.59209 12 11 10.6415 11 8.97186V8.14203C11 7.72835 10.6512 7.39204 10.2226 7.39204V7.39182Z" fill="#75BD59"></path>
                                </svg>
                                <span>DOWNLOAD</span>
                            </a>
                        </div>
                    </div>
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
            <PageSubheader imgUrl="https://images.unsplash.com/photo-1547296017-978c31e1c124?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photo Gallery Image" pageName="Photo Gallery" leadingRoutes={["homepage", "media center"]} pageText="You can download the images of our plants in high -resolution JPEG FORMAT" />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <article className="grid lg:grid-cols-5 max-md:grid-cols-1 md:gap-4 border border-[#ccdbe7]">
                            <PhotoGalleryCard galleryDetail={galleryData} />
                        </article>
                    </div>
                </div>
            </section>
            <SubPageNavigator leftLink="news" rightLink="photo gallery" />
            <Lightbox
                index={index}
                plugins={[Download, Thumbnails, Zoom,]}
                slides={galleryData}
                open={open}
                close={() => {setOpen(prev => prev = false); setIndex(prev => prev = -1)}}

            />
        </>
    )
}
export default PhotoGallery