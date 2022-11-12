import type { AppProps } from 'next/app'

import Head from "next/head";
import Script from "next/script";
import Layout from '../components/layout';
import { SessionProvider } from "next-auth/react"

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        < Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
