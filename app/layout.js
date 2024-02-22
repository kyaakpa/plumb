import "./globals.css";
import { Providers } from "./providers";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Home from "./page";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light min-w-[300px]">
      <body>
        <Providers>
          <MainNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
