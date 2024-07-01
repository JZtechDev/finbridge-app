import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#040A1466] border-t border-[#B7D2FF1A]">
      <div className="container">
        <div className="grid grid-cols-4 py-12">
          <div>
            <Image src="/logo.svg" alt="Logo" width="150" height="40" />
            <p className="text-sm opacity-50 font-medium mt-6 max-w-[50%]">
              Focus on your business not the infrastructure
            </p>
          </div>
          <div className="pl-10">
            <h6 className=" text-[1rem] opacity-50 font-medium mb-5">
              MT4/MT5
            </h6>
            <ul className="flex flex-col">
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  Matching Engine
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  Liquidity Aggregation
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  MT4 Bridge / MT5 Gateway
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  Risk Management & Reporting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className=" text-[1rem] opacity-50 font-medium mb-5">
              MT4/MT5
            </h6>
            <ul className="flex flex-col">
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  MT4 / MT5 Hosting
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  MT4 / MT5 Whitelabel
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  Access Server Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className=" text-[1rem] opacity-50 font-medium mb-5">
              MT4/MT5
            </h6>
            <ul className="flex flex-col">
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  Partners
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium" href="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" py-8 border-t border-[#B7D2FF1A]">
          <p className="text-white text-sm font-medium ">
            Copyright 2024 - Finbridge
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
