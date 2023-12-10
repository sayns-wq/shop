import "@/styles/globals.css";
import Layout from "@/modules/Layout";

import { store } from "@/redux/api";
import {Provider} from "react-redux"

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}
