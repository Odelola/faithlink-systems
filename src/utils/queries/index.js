import { gql } from "graphql-request";

export const BASE_URL = process.env.NEXT_PUBLIC_HYGRAPH_BASE_URL
// export const BASE_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwpxtzyi02gd07wbwvx0q8cj/master"


export const ALLNEWSQUERY = gql`
{
    newsPosts{
        id,
        title,
        slug, 
        excerpt,
        coverPhoto{
            url
        }
    }
}
`

export const ONENEWSPOSTQUERY = gql`
query NewsPost($slug: String!){
   newsPost(where: {slug: $slug}){
        id,
        id,
        title,
        datePublished,
        readingTime,
        slug, 
        author{
            name,
            avatar{
                url
            },
            profession
        }
        coverPhoto{
            id,
            url
        }
        content{
            html
        }
    }
}
`
export const NEWSPOSTSLUGQUERY = gql`
{
    newsPosts{
        slug
    }
}
`