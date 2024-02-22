import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Home from "./page";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light min-w-[300px]">
      <body className={inter.className}>
        <Providers>
          <MainNav />
          <FormModal styling="max-lg:fixed max-lg:right-4 max-lg:bottom-4 lg:hidden z-50" />
          {children}
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
