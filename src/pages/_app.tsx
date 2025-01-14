import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';

export default function App({ Component, pageProps }: AppProps, props: any) {
  return (
    <AppCacheProvider {...props}>
      <Component {...pageProps} />;
    </AppCacheProvider>
  )
}
