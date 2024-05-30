import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "The Silence Archive",
  description: "Film is not dead",
  icons: {
    icon: "/film-roll.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
