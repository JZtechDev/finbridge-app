import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#040A1466] border-t border-[#B7D2FF1A]  ">
      <div className="container relative isolate before:absolute before:w-[330px] before:h-[330px] before:bg-[#B7D2FF33] before:-left-[50px] before:-top-1/2 before:rounded-full before:blur-3xl before:-z-10 before:opacity-50 after:absolute after:w-[330px] after:h-[330px] after:bg-[#B7D2FF33] 3xl:after:-right-[50px] after:-right-0 after:-top-1/2 after:rounded-full after:blur-3xl after:-z-10 after:opacity-50">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 py-12">
          <div>
            <Image src="/logo.svg" alt="Logo" width="150" height="40" />
            <p className="text-sm opacity-50 font-medium mt-6 lg:max-w-[50%]">
              Focus on your business not the infrastructure
            </p>
          </div>
          <div className="md:pl-10">
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
          <div className="md:pl-5 lg:pl-0">
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
          <div className="md:pl-5 lg:pl-0">
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
