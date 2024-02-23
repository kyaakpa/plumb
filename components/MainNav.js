"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import "@/styles/hamburgers.css";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, PhoneIcon } from "@/components/Icons";
import logo from "@/public/logo-black.webp";
import { useRouter, usePathname } from "next/navigation";
import { HamburgerItems } from "./HamburgerItems";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname().toString();
  console.log(pathname);
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <Navbar
      maxWidth="full"
      className="md:px-4 shadow-sm"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link href="/" className="hover:cursor-default">
          <Image src={logo} width={75} className="-ml-5" alt="logo" />
          <span className="font-bold text-black text-xl">
            Mark J Ahern Inc.
          </span>
        </Link>
      </NavbarBrand>
      <NavbarContent
        justify="end"
        className="lg:hidden"
        onClick={() => handleClick()}
      >
        <HamburgerItems isActive={isActive} />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-8" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className={
              pathname === "/"
                ? `text-blue-600 font-semibold rounded-lg text-lg`
                : `text-lg`
            }
          >
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                className="bg-transparent data-[hover=true]:bg-transparent text-lg p-1 pr-0"
                endContent={<ChevronDown fill="currentColor" size={13} />}
                radius="sm"
                variant="light"
              >
                <span
                  className={
                    pathname === "/services/plumbing" ||
                    pathname === "/services/heating" ||
                    pathname === "/services/gas"
                      ? `text-blue-600 font-semibold rounded-lg`
                      : ``
                  }
                >
                  Services
                </span>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            itemClasses={{
              base: "gap-4",
            }}
            variant="solid"
            color="primary"
          >
            <DropdownItem
              key="plumbing"
              description="Professional plumbing"
              onClick={() => router.push("/services/plumbing")}
            >
              Plumbing
            </DropdownItem>

            <DropdownItem
              key="Heating"
              description="Warm your place"
              onClick={() => router.push("/services/heating")}
            >
              Heating
            </DropdownItem>

            <DropdownItem
              key="gas"
              description="Gas solutions"
              onClick={() => router.push("/services/gas")}
            >
              Gas Fitting
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            color="foreground"
            href="/rebates"
            className={
              pathname === "/rebates"
                ? `text-blue-600 font-semibold rounded-lg text-lg`
                : `text-lg`
            }
          >
            Rebates
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/about"
            className={
              pathname === "/about"
                ? `text-blue-600 font-semibold rounded-lg text-lg`
                : `text-lg`
            }
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            className={
              pathname === "/contact"
                ? `text-blue-600 font-semibold rounded-lg text-lg`
                : `text-lg`
            }
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className=" max-lg:hidden">
        <NavbarItem className="flex flex-col">
          <span className="text-sm font-semibold text-black">
            Need help? Call us at!
          </span>
          <Link
            href="tel:(617) 492-5198"
            className="text-sm text-blue-600 ml-1"
          >
            <PhoneIcon /> (617) 492-5198
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
