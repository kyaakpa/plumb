import logo from "@/public/logo2.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="hidden md:visible bg-zinc-900 text-slate-300 md:flex justify-evenly mt-12">
      <Link href="/">
        <Image src={logo} width={300} alt="logo" />
      </Link>
      <div className="footerItems">
        <h4>About Us</h4>
        <h4 className="font-bold">Mark J. Ahern</h4>
        <p>Plumbing, Heating, Gas</p>
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
{
  /* <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4>About Us</h4>
            <p>Company XYZ is Link leading provider of innovative solutions...</p>
          </div>
          <div class="col-md-4">
            <h4>Contact Us</h4>
            <address>
              <p>123 Main Street</p>
              <p>City, State ZIP Code</p>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          <div class="col-md-4">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Products</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */
}
