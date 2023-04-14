import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${nunitoSans.variable} bg-very-light-gray-light dark:bg-very-dark-blue-dark transition-colors`}
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />;
      </ThemeProvider>
    </div>
  );
}
