import type { AppProps } from "next/app";

import Navbar from "@/components/Navbar";

import "@/styles/globals.css";

export default function Test({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
