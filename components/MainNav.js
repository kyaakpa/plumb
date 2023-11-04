"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import Image from "next/image";
import { ChevronDown } from "@/components/Icons";
import logo from "@/public/logo-black.webp";
import FormModal from "@/components/FormModal";
import { useRouter, usePathname } from "next/navigation";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname().toString();
  const router = useRouter();

  const menuItems = [
    "Home",
    "Plumbing Services",
    "Heating Services",
    "Gas Services",
    "About Us",
    "Contact Us",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarBrand isActive={false}>
          <Link href="/" className="hover:cursor-default">
            <Image src={logo} width={75} className="-ml-5" alt="logo" />
            <span className="font-bold text-black text-xl">
              Mark J Ahern Inc.
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
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
                className="bg-transparent data-[hover=true]:bg-transparent text-lg pr-1"
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
            variant="light"
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
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarItem className="hidden md:block">
          <FormModal color="primary" variant="flat" />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="z-40 items-center gap-6 pt-24">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === menuItems.length - 1 ? "primary" : "foreground"}
              className="w-full text-xl"
              href={
                index === 0
                  ? "/"
                  : index === 1
                  ? "/services/plumbing"
                  : index === 2
                  ? "/services/heating"
                  : index === 3
                  ? "/services/gas"
                  : index === 4
                  ? "/about"
                  : index === menuItems.length - 1
                  ? "/contact"
                  : ""
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
