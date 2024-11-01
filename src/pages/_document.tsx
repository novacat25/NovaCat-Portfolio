import { Footer } from "@/components/layouts/Footer/Footer"
import { Header } from "@/components/layouts/Header/Header"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Header />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
