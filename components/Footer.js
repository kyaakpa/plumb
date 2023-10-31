import logo from "@/public/logo2.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="hidden md:visible bg-neutral-950 mt-16 text-slate-300 md:flex justify-evenly">
      <div className="footerItems">
        <h4>Contact Us</h4>
        <section>
          <p>4 Cortland Lane</p>
          <p>Lynnfield, MA 01940</p>
          <p>Phone: (617) 491-5198</p>
          <p>Fax: (617) 864-0295</p>
          <p>Email: Markjaherninc@gmail.com</p>
        </section>
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
        <Image src={logo} width={300} alt="logo" />
      </Link>
    </footer>
  );
};

export default Footer;
