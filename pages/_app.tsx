import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '@/lib/client/components/shared/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Next.js upskill application"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>E-commerce</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
