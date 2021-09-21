import type { AppProps } from 'next/app'
import 'src/styles/tailwindcss/tailwindcss.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
