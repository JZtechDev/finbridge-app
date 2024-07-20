"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="absolute w-full z-50">
      <div className="container mt-10">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width="110" height="30" />
          </Link>
          <div className="bg-[#050D1B33] lg:flex hidden gap-[15px] justify-between items-center p-[5px] border border-[#B7D2FF06] rounded-full h-[3.375rem]">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium border-[0px] outline-none features_nav">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-md h-auto overflow-auto flex flex-col gap-2 md:w-[300px] items-start justify-start bg-[#03070D66] border border-[#B7D2FF1A] p-[10px]">
                    <NavigationMenuLink
                      className={`text-white h-10 w-full flex text-sm items-center pl-[20px] bg-[#10141B] rounded-[10px] border border-white/10 ${
                        pathName.includes("matching-engine") &&
                        "!bg-white !text-[#081428]"
                      }`}
                      href="/matching-engine"
                    >
                      Matching Engine
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={`text-white h-10 w-full flex text-sm items-center pl-[20px] bg-[#10141B] rounded-[10px] border border-white/10 ${
                        pathName.includes("liquidity-aggregation") &&
                        "!bg-white !text-[#081428]"
                      }`}
                      href="/liquidity-aggregation"
                    >
                      Liquidity Aggregation
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={`text-white h-10 w-full flex text-sm items-center pl-[20px] bg-[#10141B] rounded-[10px] border border-white/10 ${
                        pathName.includes("mt4-bridge-mt5-gateway") &&
                        "!bg-white !text-[#081428]"
                      }`}
                      href="/mt4-bridge-mt5-gateway"
                    >
                      Mt4 Bridge / Mt5 Gateway
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={`text-white h-10 w-full flex text-sm items-center pl-[20px] bg-[#10141B] rounded-[10px] border border-white/10 ${
                        pathName.includes("risk-management-and-reporting") &&
                        "!bg-white !text-[#081428]"
                      }`}
                      href="/risk-management-and-reporting"
                    >
                      Risk Management And Reporting
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={`text-white h-10 w-full flex text-sm items-center pl-[20px] bg-[#10141B] rounded-[10px] border border-white/10 ${
                        pathName.includes("fix-api-connectivity") &&
                        "!bg-white !text-[#081428]"
                      }`}
                      href="/fix-api-connectivity"
                    >
                      Fix API Server
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium border-[0px] outline-none features_nav">
                    MT4/MT5
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-md h-auto overflow-auto flex flex-col md:w-[300px] gap-2 items-start justify-start bg-[#03070D66] border border-[#B7D2FF1A] p-[10px]">
                    <NavigationMenuLink
                      className={`text-white h-10 w-full flex text-sm items-center pl-[20px] bg-[#10141B] rounded-[10px] border border-white/10 ${
                        pathName.includes("mt4-mt5-hosting") &&
                        "!bg-white !text-[#081428]"
                      }`}
                      href="/mt4-mt5-hosting"
                    >
                      MT4/MT5 Hosting & Administration
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={`text-white h-10 w-full flex text-sm items-center pl-[20px] bg-[#10141B] rounded-[10px] border border-white/10 ${
                        pathName.includes("mt4-mt5-white-label") &&
                        "!bg-white !text-[#081428]"
                      }`}
                      href="/mt4-mt5-white-label"
                    >
                      MT4/MT5 White Label
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className={`text-white h-10 w-full flex text-sm items-center pl-[20px] bg-[#10141B] rounded-[10px] border border-white/10 ${
                        pathName.includes("access-server") &&
                        "!bg-white !text-[#081428]"
                      }`}
                      href="/access-server"
                    >
                      Access Server Management
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium border-[0px] outline-none"
                    href="/about-us"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="lg:flex hidden justify-end gap-[10px]">
            <Button className="btn-shadow" variant="secondary">
              Schedule Demo
            </Button>
            <Button className="">Premium LP</Button>
          </div>
          <Sheet>
            <SheetTrigger className="lg:hidden block">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-10 justify-between items-start mt-5">
                <Link href="/">
                  <Image src="/logo.svg" alt="Logo" width="210" height="30" />
                </Link>
                <Menubar className="flex flex-col h-auto justify-start items-start gap-4">
                  <MenubarMenu>
                    <MenubarTrigger className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium">
                      Features{" "}
                      <span className="flex items-center justify-center w-4 text-[#FFFFFF4D]">
                        <ChevronDown />
                      </span>
                    </MenubarTrigger>
                    <MenubarContent className="bg-[#10141b] border-0 ">
                      <Link
                        className="text-white text-sm px-4"
                        href="/matching-engine"
                      >
                        Matching Engine
                      </Link>
                      <MenubarSeparator />
                      <Link
                        className="text-white text-sm px-4"
                        href="/liquidity-aggregation"
                      >
                        Liquidity Aggregation
                      </Link>
                      <MenubarSeparator />
                      <Link
                        className="text-white text-sm px-4"
                        href="/mt4-bridge-mt5-gateway"
                      >
                        Mt4 Bridge / Mt5 Gateway
                      </Link>
                      <MenubarSeparator />
                      <Link
                        className="text-white text-sm px-4"
                        href="/risk-management-and-reporting"
                      >
                        Risk Management And Reporting
                      </Link>
                      <MenubarSeparator />
                      <Link
                        className="text-white text-sm px-4"
                        href="/fix-api-connectivity"
                      >
                        Fix API Server
                      </Link>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium !ml-0">
                      MT4/MT5
                      <span className="flex items-center justify-center w-4 text-[#FFFFFF4D]">
                        <ChevronDown />
                      </span>
                    </MenubarTrigger>
                    <MenubarContent className="bg-[#10141b] border-0 ">
                      <Link
                        className="text-white text-sm px-4"
                        href="/mt4-mt5-hosting"
                      >
                        MT4/MT5 Hosting & Administration
                      </Link>
                      <MenubarSeparator />
                      <Link
                        className="text-white text-sm px-4"
                        href="/mt4-mt5-white-label"
                      >
                        MT4/MT5 White Label
                      </Link>
                      <MenubarSeparator />
                      <Link
                        className="text-white text-sm px-4"
                        href="/access-server"
                      >
                        Access Server Management
                      </Link>
                    </MenubarContent>
                  </MenubarMenu>
                  <Link
                    className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium py-[6px] !ml-0"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </Menubar>

                {/* <div className="flex flex-col gap-9 justify-between items-start p-[5px]">
                  <Link
                    className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium"
                    href="/userguide"
                  >
                    Features
                    <span className="flex items-center justify-center w-4 text-[#FFFFFF4D]">
                      <ChevronDown />
                    </span>
                  </Link>
                  <Link
                    className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium"
                    href="/userguide"
                  >
                    MT4/MT5
                    <span className="flex items-center justify-center w-4 text-[#FFFFFF4D]">
                      <ChevronDown />
                    </span>
                  </Link>
                  <Link
                    className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </div> */}
                <div className="flex sm:flex-row flex-col justify-end gap-[10px]">
                  <Button className="btn-shadow" variant="secondary">
                    Schedule Demo
                  </Button>
                  <Button className="">Premium LP</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
