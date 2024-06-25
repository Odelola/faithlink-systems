import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300@500&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}