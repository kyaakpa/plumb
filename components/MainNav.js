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
import { useRouter, usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname().toString();
  const router = useRouter();

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
            itemClasses={{
              base: "gap-4",
            }}
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
        <NavbarItem>
          <FormModal color="primary" variant="flat" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
