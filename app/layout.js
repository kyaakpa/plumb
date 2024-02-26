import "./globals.css";
import { Providers } from "./providers";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light min-w-[300px]">
      <body>
        <Providers>
          <MainNav />
          {children}
          <FormModal styling="max-lg:block hidden fixed bottom-0 right-0 m-4 animate-bounce z-50" />
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
