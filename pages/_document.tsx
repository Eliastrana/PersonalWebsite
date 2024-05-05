
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="My portfolio website"/>
                    <meta name="keywords" content="nextjs,eliastrana,elias,photography,code"/>
                    <meta name="robots" content="all"/>
                </Head>
                <body>
                <Main/>
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

