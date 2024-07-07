import Head from "next/head"
import PageSubheader from "../../../src/components/PageSubheader"
import Link from "next/link"
import SubPageNavigator from "../../../src/components/SubPageNavigator"
import { GraphQLClient } from 'graphql-request'
import { ALLNEWSQUERY, BASE_URL } from "../../../src/utils/queries"
import { getRoute } from "../../../src/components/utils"


const FaithLinkCMS = new GraphQLClient(BASE_URL);

function News({ newsPosts }) {

    const NewsCard = ({ newsArticles }) => {
        return (newsArticles.map(({ id, title, slug, coverPhoto, excerpt }) => {
            return (
                <Link href={`${getRoute["news"]}/${slug}`} key={id} className="hover:scale-[1.02]">
                    <div className="flex flex-col gap-y-4 relative">
                        <div className=" min-h-[420px] relative">
                            <img src={coverPhoto.url} alt={`Image for ${title}`} className="mb-2 w-full h-[300px]" />
                            <h1>{title}</h1>
                            <p>{excerpt}</p>
                        </div>
                    </div>
                </Link>
            )
        }))
    }

    return (
        <>
            <Head>
                <title>NEWS - Faith Link Systems Limited</title>
                <meta name="description" content="NEWS" />
            </Head>
            <PageSubheader imgUrl="_news_.jpg" alt="NEWS Image" pageName="NEWS" leadingRoutes={["homepage", "media center"]} pageText="You can get the latest developments of Faithlink System here." />
            <section className="section-top">
                <div className="container">
                    <div className="container container-lg">
                        <article className="grid md:grid-cols-3 grid-cols-1 gap-6">
                            <NewsCard newsArticles={newsPosts} />
                        </article>
                    </div>
                </div>
            </section>
            <SubPageNavigator leftLink="news" rightLink="photo gallery" />
        </>
    )
}

export async function getStaticProps() {
    const { newsPosts } = await FaithLinkCMS.request(ALLNEWSQUERY);
    return {
        props: {
            newsPosts
        }
    }
}
export default News