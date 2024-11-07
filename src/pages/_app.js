import localFont from "next/font/local";
import "./globals.css";

const fontCina = localFont({
  src: [
    {
      path: '../fonts/CinaRegular400.woff',
      weight: "400"
    },
    {
      path: "../fonts/CinaMedium500.woff",
      weight: "500"
    },
    {
      path: "../fonts/CinaSemiBold600.woff",
      weight: "600"
    },
    {
      path: '../fonts/CinaBold700.woff',
      weight: "700"
    }
  ],
  variable: "--font-cina",
  weight: "400 700",
})

export default function RootLayout({ Component, pageProps }) {
  return (
    <Component className={`${fontCina.variable}`} {...pageProps} />
  );
}
