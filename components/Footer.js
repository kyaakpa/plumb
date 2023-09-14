import logo from "@/public/logo2.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="hidden md:visible bg-zinc-900 text-slate-300 md:flex justify-evenly mt-16">
      <Link href="/">
        <Image src={logo} width={300} alt="logo" />
      </Link>
      <div>

      </div>
      <div className="footerItems">
        <h4>Contact Us</h4>
        <section>
          <p>4 Cortland Lane</p>
          <p>Lynnfield, MA 01940</p>
          <p>Phone: (617) 491-5198</p>
          <p>Fax: (617) 864-0295</p>
          <p>Email: Mark@Markjaherninc.com</p>
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
    </footer>
  );
};

export default Footer;

