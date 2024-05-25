import Head from "next/head"
import PageSubheader from "../../src/components/PageSubheader"
import Link from "next/link"
import SubPageNavigator from "../../src/components/SubPageNavigator"

function News() {

    const newsHeadlines = [
        {
            imgUrl: "https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "THE FUTURE OF FIBRE OPTICS",
            text: "Fibre Optics is used to transmit fast internet. It is sometimes preferred in some cases than wifi.",
            link: "javascript:;"
        },
        {
            imgUrl: "https://images.unsplash.com/photo-1610028290816-5d937a395a49?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "SUSTAINABLE POWER",
            text: "Electricity is necessary when it comes to a lot of things. This is why Faithlink perseveres to provide more power.",
            link: "javascript:;"
        },
        {
            imgUrl: "https://images.unsplash.com/photo-1634474588578-7f0565a1cea5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "INVESTMENT DECISION IN FAITHLINK",
            text: "Faithlink aims to provide multiple investment by the year 2025. This create a huge step in the development of Faithlink.",
            link: "javascript:;"
        },
    ]

    const NewsCard = ({ headlines }) => {
        return (headlines.map((item, index) => {
            return (

                <div key={index} className="flex flex-col gap-y-4 relative">
                    <div className=" min-h-[420px] relative">

                        <img src={item.imgUrl} alt={`Image for ${item.title}`} className="mb-2" />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                    <Link href={item.link} className="text-primary flex items-center gap-x-2 absolute left-0 bottom-0">
                        <span class="link-item__span">DETAIL</span>
                        <i class="link-item__icon">
                            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-primary">
                                <path d="M5.99547 5.40301C5.97441 5.18645 5.88579 4.98168 5.74185 4.81693L1.89746 0.390283C1.80764 0.28092 1.69653 0.190426 1.5707 0.124141C1.44486 0.0578555 1.30684 0.0171222 1.16479 0.00434775C1.02274 -0.00842766 0.879538 0.00701424 0.743634 0.0497608C0.60773 0.0925064 0.481879 0.16169 0.373512 0.253229C0.265144 0.344768 0.176456 0.456806 0.112682 0.58273C0.0489074 0.708654 0.0113393 0.845912 0.0021959 0.986402C-0.00694753 1.12689 0.0125188 1.26777 0.0594454 1.40071C0.106372 1.53365 0.179808 1.65596 0.275419 1.76044L3.52599 5.50163L0.275419 9.2432C0.180586 9.34779 0.107875 9.47002 0.0615518 9.60272C0.015229 9.73542 -0.00377228 9.87592 0.00566298 10.016C0.0150982 10.156 0.0527804 10.2928 0.116497 10.4183C0.180214 10.5437 0.268683 10.6554 0.376712 10.7467C0.484741 10.838 0.610154 10.907 0.745592 10.9498C0.88103 10.9926 1.02376 11.0083 1.16542 10.9959C1.30707 10.9835 1.4448 10.9433 1.5705 10.8777C1.69621 10.8121 1.80737 10.7223 1.89746 10.6137L5.74185 6.18708C5.83525 6.07986 5.90584 5.95519 5.94941 5.82049C5.99299 5.68579 6.00865 5.54381 5.99547 5.40301Z" fill=""></path>
                            </svg>
                        </i>
                    </Link>
                </div>
            )
        }))
    }

    return (
        <>
            <Head>
                <title>NEWS - Faith Link Systems Limited</title>
                <meta name="description" content="NEWS" />
            </Head>
            <PageSubheader imgUrl="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="NEWS Image" pageName="NEWS" leadingRoutes={["homepage", "media center"]} pageText="You can get the latest developments of Faithlink System here." />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <article className="grid md:grid-cols-3 grid-cols-1 gap-6">
                            <NewsCard headlines={newsHeadlines} />
                        </article>
                    </div>
                </div>
            </section>
            <SubPageNavigator leftLink="news" rightLink="photo gallery" />

        </>
    )
}
export default News