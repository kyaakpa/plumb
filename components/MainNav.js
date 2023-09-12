"use client";
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
} from "@nextui-org/react";
import Image from "next/image";
import { ChevronDown } from "@/components/Icons";
import logo from "@/public/logo.png";
import FormModal from "@/components/FormModal";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname().toString();

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <Image src={logo} width={80} className="-ml-5" alt="logo" />
          <span className="font-bold text-slate-200 text-lg">Mark J Ahern</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
            className=""
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="plumbing" description="Professional plumbing">
              <Link href="/services/plumbing" className="text-slate-300">
                Plumbing
              </Link>
            </DropdownItem>

            <DropdownItem key="Heating" description="Warm your place">
              <Link href="/services/heating" className="text-slate-300">
                Heating
              </Link>
            </DropdownItem>

            <DropdownItem key="gas" description="Gas solutions">
              <Link href="/services/gas" className="text-slate-300">
                Gas
              </Link>
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
        <NavbarItem>
          <FormModal color="primary" variant="flat" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
