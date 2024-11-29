import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "GDGC, GCOEN",
  description:
    "Google Developer Group on Campus - Government College of Engineering, Nagpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Primary Meta Tags --> */}
        <title>GDGC, GCOEN</title>
        <meta name="title" content="GDGC, GCOEN" />
        <meta
          name="description"
          content="Google Developer Group on Campus - Government College of Engineering, Nagpur"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcsjgcoen.vercel.app/" />
        <meta property="og:title" content="GDGC, GCOEN" />
        <meta
          property="og:description"
          content="Google Developer Group on Campus - Government College of Engineering, Nagpur"
        />
        <meta property="og:image" content="/code.svg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gcsjgcoen.vercel.app/" />
        <meta property="twitter:title" content="GDGC, GCOEN" />
        <meta
          property="twitter:description"
          content="Google Developer Group on Campus - Government College of Engineering, Nagpur"
        />
        <meta property="twitter:image" content="/code.svg" />

        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>

      <body className="bg-white pyro">
        <Navbar />
        <Toaster position="bottom-center" reverseOrder={false} />
        <div className=" mt-[120px] md:mt-36">{children}</div> <Footer />
      </body>
    </html>
  );
}
