"use client";
import React, { useState } from "react"; // Import React
import Link from "next/link";
import "@/styles/hamburgers.css"; // Import hamburger CSS file (assuming it's located in the correct path)
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  AboutUsIcon,
  PlumbingIcon,
  HVACIcon,
  ValveIcon,
  PhoneIcon,
} from "./Icons";

export const HamburgerItems = () => {
  const path = usePathname();
  console.log(path);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const menuItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Plumbing Services",
      link: "/services/plumbing",
      divider: true,
      icon: <PlumbingIcon />,
    },
    {
      name: "Heating Services",
      link: "/services/heating",
      icon: <HVACIcon />,
    },
    {
      name: "Gas Services",
      link: "/services/gas",
      icon: <ValveIcon />,
    },
    {
      name: "About Us",
      link: "/about",
      divider: true,
      icon: <AboutUsIcon />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <PhoneIcon />,
    },
  ];

  return (
    <>
      <div className="relative">
        <button
          className={`hamburger hamburger--elastic ${
            isActive ? "is-active" : ""
          }`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div
          className={`absolute top-full right-0 w-[280px] ${
            isActive ? "" : "hidden"
          }`}
        >
          <div
            className="bg-white border border-gray-200 p-2 m-0 flex flex-col rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
            }}
          >
            {menuItems.map((item, index) => (
              <>
                {item.divider && <div className="border-t-1 my-2" />}
                <Link
                  key={index}
                  href={item.link}
                  className="text-right p-3  px-4 rounded-lg text-lg hover:bg-blue-500 transition-colors duration-200 ease-in hover:text-white  font-medium"
                >
                  <motion.p
                    variants={{
                      hidden: { opacity: 0.3, x: -200 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    transition={{ duration: 0.4, delay: 0.1 }}
                    animate={isActive ? "visible" : "hidden"}
                  >
                    {item.link === path ? (
                      <span className="flex justify-end items-center gap-3">
                        {item.icon}
                        <span className="font-bold">{item.name}</span>
                      </span>
                    ) : (
                      <span className="flex justify-end gap-3 items-center">
                        {item.icon}
                        {item.name}
                      </span>
                    )}
                  </motion.p>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerItems;
