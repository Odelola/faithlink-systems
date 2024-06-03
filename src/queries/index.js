import { gql } from "graphql-request";

export const BASE_URL = "";


export const ALLNEWSQUERY = gql`
{
    posts{
        id,
        title,
    datePublished,
    slug, 
            
    }
}`