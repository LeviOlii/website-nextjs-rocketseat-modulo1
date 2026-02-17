import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, PT_Sans_Caption } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ptSans = PT_Sans_Caption({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pt-sans" });


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${inter.variable} ${ptSans.variable}`}>
      <Component {...pageProps} />
    </Layout>
  );
}
