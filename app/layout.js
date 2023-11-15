import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light min-w-[300px]">
      <body className={inter.className}>
        <Providers>
          <MainNav />
          {children}
          <FormModal className="fixed bottom-[10px] right-[10px] " />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
