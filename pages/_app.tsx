import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/index.css'
import '../styles/global.css'; // Adjust the path based on your directory structure

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <link
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
              rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </>
  )
}
