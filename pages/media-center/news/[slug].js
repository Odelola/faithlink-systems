import Head from "next/head"
import Link from "next/link"
import SubPageNavigator from "../../../src/components/SubPageNavigator"
import { GraphQLClient } from 'graphql-request'
import { ONENEWSPOSTQUERY, BASE_URL, NEWSPOSTSLUGQUERY } from "../../../src/utils/queries"
import Breadcrumb from "../../../src/components/Breadcrumb"
import { convertDate } from "../../../src/utils/helpers/dateConvert"
import { getRoute } from "../../../src/components/utils"


const FaithLinkCMS = new GraphQLClient(BASE_URL);

function NewsPageSubheader({ title, datePublished, readingTime, author }) {
    return (
        <article className='relative h-[400px] xs:max-md:h-[200px] md:max-lg:h-[300px] w-full '>
            <div className="container h-full xs:max-md:p-0">
                <div className="absolute h-full top-0 left-0 w-full">
                    <div className="container container-lg relative h-full">
                        <div className="absolute top-1/2 -translate-y-1/2 px-5 lg:px-0 flex flex-col items-center gap-y-2">
                            <div className="flex gap-x-3 items-center text-[11.5px]">
                                <time className="aos-init aos-animate bg-primary text-white p-1" time data-aos-duration="1000" data-aos="fade-down" data-aos-delay="300">
                                    {convertDate(datePublished)}
                                </time>
                                <div className="flex gap-x-1">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-primary">
                                        <path d="M9 4.20001V9.00001H13.8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 17C13.4184 17 17 13.4184 17 9C17 4.5816 13.4184 1 9 1C4.5816 1 1 4.5816 1 9C1 13.4184 4.5816 17 9 17Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {readingTime}{readingTime == 1 ? " min read" : " mins read"}
                                </div>
                            </div>
                            <h1 data-aos-duration="1000" data-aos="fade-down" data-aos-delay="300" className="aos-init aos-animate lg:text-[50px] mb-0 text-center">
                                {title.toUpperCase()}
                            </h1>
                            <div className="flex items-center gap-x-2">

                                <img src={author.avatar.url} alt={`Image of ${author.name}`} className="w-14 h-14 rounded-full" />
                                <div>
                                    <h3 className="mb-0">{author.name}</h3>
                                    <p className="text-secondary mb-0">{author.profession}</p>
                                </div>
                            </div>
                        </div>
                        <Breadcrumb leadingRoutes={["homepage", "media center", "news"]} />
                    </div>
                </div>
            </div>
        </article>
    )
}

function NewsPost({ newsPost }) {
    const { title, datePublished, coverPhoto, author, content, readingTime } = newsPost;

    return (
        <>
            <Head>
                <title>NEWS - {title}</title>
                <meta name="description" content={`NEWS - ${title}`} />
            </Head>
            <NewsPageSubheader {...{ title, datePublished, readingTime, author }} />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <div>
                            <img className="aos-init aos-animate w-full my-16 h-[450px]" src={coverPhoto.url} alt={`Cover Photo of ${title}`} data-aos-duration="1000" data-aos="fade-down" data-aos-delay="300" />
                        </div>
                        <article className="news-article-container mx-auto" data-aos-duration="1000" data-aos="fade-down" data-aos-delay="300">
                            
                        <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
                        <Link href={getRoute["news"]} className="flex gap-x-2 items-center text-primary fill-primary mt-32 text-[14px]">
                            <i>
                                <svg width="6" height="11" viewBox="0 0 6 11" className="fill-primary rotate-180" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.99547 5.40301C5.97441 5.18645 5.88579 4.98168 5.74185 4.81693L1.89746 0.390283C1.80764 0.28092 1.69653 0.190426 1.5707 0.124141C1.44486 0.0578555 1.30684 0.0171222 1.16479 0.00434775C1.02274 -0.00842766 0.879538 0.00701424 0.743634 0.0497608C0.60773 0.0925064 0.481879 0.16169 0.373512 0.253229C0.265144 0.344768 0.176456 0.456806 0.112682 0.58273C0.0489074 0.708654 0.0113393 0.845912 0.0021959 0.986402C-0.00694753 1.12689 0.0125188 1.26777 0.0594454 1.40071C0.106372 1.53365 0.179808 1.65596 0.275419 1.76044L3.52599 5.50163L0.275419 9.2432C0.180586 9.34779 0.107875 9.47002 0.0615518 9.60272C0.015229 9.73542 -0.00377228 9.87592 0.00566298 10.016C0.0150982 10.156 0.0527804 10.2928 0.116497 10.4183C0.180214 10.5437 0.268683 10.6554 0.376712 10.7467C0.484741 10.838 0.610154 10.907 0.745592 10.9498C0.88103 10.9926 1.02376 11.0083 1.16542 10.9959C1.30707 10.9835 1.4448 10.9433 1.5705 10.8777C1.69621 10.8121 1.80737 10.7223 1.89746 10.6137L5.74185 6.18708C5.83525 6.07986 5.90584 5.95519 5.94941 5.82049C5.99299 5.68579 6.00865 5.54381 5.99547 5.40301Z" fill=""></path>
                                </svg>
                            </i>
                            RETURN TO NEWS PAGE
                        </Link>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}


export async function getStaticPaths() {
    const { newsPosts } = await FaithLinkCMS.request(NEWSPOSTSLUGQUERY);

    return {
        paths: newsPosts.map(newsPost => ({ params: { slug: newsPost.slug } })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

    const newsPostSlug = params.slug;
    const { newsPost } = await FaithLinkCMS.request(ONENEWSPOSTQUERY, { slug: newsPostSlug })
    return {
        props: {
            newsPost
        },
        revalidate: 60
    }

}
export default NewsPost