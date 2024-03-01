import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/global.css'; // Adjust the path based on your directory structure


export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
