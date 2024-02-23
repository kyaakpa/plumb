import { facebook } from "@/public/facebook.webp";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-6 xl:px-60 py-6 border-gray-200 border-t-1 gap-4 ">
        <div className="flex flex-col items-start gap-2 md:gap-4 ">
          <h1 className="flex flex-col text-start md:text-xl lg:text-4xl font-bold mb-2">
            Have a plumbing emergency?
            <span> Call us now!</span>
          </h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-24 ">
          <div className="gap-1 md:gap-4">
            <h1 className="text-start text-sm md:text-lg lg:text-xl font-bold mb-1 md:mb-4">
              Mailing Address
            </h1>
            <p className="text-xs md:text-base">Mark J. Ahern Inc.</p>
            <p className="text-xs md:text-base">4 Cortland Lane Lynnfield,</p>
            <p className="text-xs md:text-base">MA 01940</p>
          </div>
          <div className="gap-1 md:gap-4">
            <h1 className="text-start text-sm md:text-lg lg:text-xl font-bold mb-1 md:mb-4">
              Contact Information
            </h1>
            <p className="text-xs md:text-base">Phone: (617) 492-5198</p>
            <p className="text-xs md:text-base">Fax: (617) 864-0295</p>
            <Link
              href="mailto:Mark@Markjaherninc.com"
              className="hover:cursor-pointer"
            >
              <p className="inline-block border-b border-blue-400 text-blue-400 text-xs md:text-base">
                Mark@Markjaherninc.com
              </p>
            </Link>
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center text-xs md:text-sm justify-center bg-black text-white py-4">
        <p>© 2024 All Rights Reserved | Mark J. Ahern, Inc. </p>
      </footer>
    </div>
  );
};

export default Footer;
