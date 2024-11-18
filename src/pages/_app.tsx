import "@/styles/globals.css"
import { Footer } from "@/components/layouts/Footer"
import { Header } from "@/components/layouts/Header"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}
