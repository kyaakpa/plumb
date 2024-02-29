import React, { useState } from "react";
import { CrossIcon, FacebookIcon, Hamburger, InstagramIcon } from "./Icons";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Plumbing Services",
      link: "/services/plumbing",
      divider: true,
    },
    {
      name: "Heating Services",
      link: "/services/heating",
    },
    {
      name: "Gas Services",
      link: "/services/gas",
    },
    {
      name: "Rebates",
      link: "/rebates",
      divider: true,
    },
    {
      name: "About Us",
      link: "/about",
      divider: true,
    },

    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div>
      <button onClick={toggleOpen}>
        <Hamburger />
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen bg-white w-full">
          <div className="p-8 flex flex-col items-start">
            <button onClick={toggleOpen} className="self-end">
              <CrossIcon />
            </button>

            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-lg font-semibold text-gray-800 mb-4"
              >
                {item.name}
              </a>
            ))}

            <Divider />

            <div className="flex flex-row items-center mt-4 space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61551657747301"
                target="_blank"
              >
                <FacebookIcon />
              </Link>
              <Link href="#">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
