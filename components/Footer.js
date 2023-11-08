import facebook from "@/public/facebook.webp";
import instagram from "@/public/instagram.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 justify-center mt-32 mb-16 text-neutral-600">
      <p>@markjaherninc</p>
      <div className="flex gap-4">
        <Link
          href={"https://www.facebook.com/profile.php?id=61551657747301"}
          target="_blank"
        >
          <Image src={facebook} width={32} alt="facebook icon" />
        </Link>
        <Link href={"#"} target="_blank">
          <Image src={instagram} width={32} alt="instagram icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
