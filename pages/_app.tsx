import '@/styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Layout } from '@/lib/client/components/shared/Layout';
import theme from '@/lib/client/utils/theme';
import createEmotionCache from '@/lib/client/utils/createEmotionCache';
import { AuthProvider } from '@/lib/client/utils/AuthProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
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
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AuthProvider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  );
}
