import React from 'react'

import Document, {Html, Head, Main, NextScript} from 'next/document';


export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps
        }
    }
    render() {
        return (
            <Html>
                <Head>

                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Dela+Gothic+One&family=Inter&family=Oswald:wght@200;400&display=swap" rel="stylesheet"/>

                </Head>

                <body>
                    <Main/>
                    <NextScript/>



                </body>


            </ Html>
        );
    }
}

