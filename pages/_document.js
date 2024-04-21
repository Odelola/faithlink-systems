import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="..." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300@500&display=swap" rel="stylesheet" />
                <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}