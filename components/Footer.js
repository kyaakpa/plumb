import logo from "@/public/logo2.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="hidden md:visible bg-blue-600 mt-16 text-white md:flex justify-evenly">
      <div className="footerItems">
        <h4>Contact Us</h4>
        <ul>
          <li>4 Cortland Lane</li>
          <li>Lynnfield, MA 01940</li>
          <li>
            Phone: <a href="tel:(617) 491-5198">(617) 491-5198</a>
          </li>
          <li>Fax: (617) 864-0295</li>
          <li>
            Email:
            <a
              href="mailto:markjaherninc@gmail.com?subject=Enquire"
              className="hover:text-green-300"
            >
              {" "}
              Markjaherninc@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <ul className="footerItems">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services/plumbing">Plumbing Services</Link>
        </li>
        <li>
          <Link href="/services/heating">Heating Services</Link>
        </li>
        <li>
          <Link href="/services/gas">Gas Services</Link>
        </li>
      </ul>
      <div></div>

      <Link href="/">
        <Image src={logo} width={400} alt="logo" />
      </Link>
    </footer>
  );
};

export default Footer;
