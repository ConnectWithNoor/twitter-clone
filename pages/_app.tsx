import { Layout, LoginModal, RegisterModal, EditModal } from "@/components";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <LoginModal />
      <RegisterModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
