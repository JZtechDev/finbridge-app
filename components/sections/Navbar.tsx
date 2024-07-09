import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="absolute w-full z-50">
      <div className="container mt-10">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" alt="Logo" width="110" height="30" />
          <div className="bg-[#050D1B33] lg:flex hidden gap-[15px] justify-between items-center p-[5px] border border-[#B7D2FF06] rounded-full h-[3.375rem]">
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
              href="/userguide"
            >
              About Us
              <span className="flex items-center justify-center w-4 text-[#FFFFFF4D]">
                <ChevronDown />
              </span>
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
                <Image src="/logo.svg" alt="Logo" width="210" height="30" />
                <div className="flex flex-col gap-9 justify-between items-center p-[5px]">
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
                    href="/userguide"
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
