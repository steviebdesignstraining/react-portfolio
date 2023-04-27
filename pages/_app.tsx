import { ThemeProvider } from "@/context/theme/theme.context";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
