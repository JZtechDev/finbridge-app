import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <header className="absolute w-full z-50">
      <div className="container mt-10">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width="110" height="30" />
          </Link>
          <div className="bg-[#050D1B33] lg:flex hidden gap-[15px] justify-between items-center p-[5px] border border-[#B7D2FF06] rounded-full h-[3.375rem]">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium border-[0px] outline-none">
                Solutions
                <span className="flex items-center justify-center w-4 text-[#FFFFFF4D]">
                  <ChevronDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/matching-engine">Matching Engine</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/liquidity-aggregation">
                    Liquidity Aggregation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/mt4-bridge-mt5-gateway">
                    Mt4 Bridge / Mt5 Gateway
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/risk-management-and-reporting">
                    Risk Management And Reporting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/fix-api-connectivity">Fix API Server</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium border-[0px] outline-none">
                MT4/MT5
                <span className="flex items-center justify-center w-4 text-[#FFFFFF4D]">
                  <ChevronDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/mt4-mt5-hosting">
                    MT4/MT5 Hosting & Administration
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/mt4-mt5-white-label">MT4/MT5 White Label</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/access-server">Access Server Management</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium border-[0px] outline-none"
              href="/about-us"
            >
              About Us
            </Link>
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
                <div className="flex flex-col gap-9 justify-between items-center p-[5px]">
                  <Link
                    className="flex gap-2 justify-between items-center px-[15px] text-sm font-medium"
                    href="/userguide"
                  >
                    Solutions
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
                    <span className="flex items-center justify-center w-4 text-[#FFFFFF4D]">
                      <ChevronDown />
                    </span>
                  </Link>
                </div>
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
