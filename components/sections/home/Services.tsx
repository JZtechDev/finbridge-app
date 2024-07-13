import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="overflow-x-hidden min-w-full h-[338px]">
        <div className="relative before:absolute h-[200px] lg:before:w-[4000px] lg:before:h-[4000px] sm:before:w-[2000px] before:w-[1000px] sm:before:h-[2000px] before:h-[1000px] before:-translate-x-1/2 before:left-1/2 before:bottom-28 before:bg-[#03070D] before:-z-10 before:rounded-full after:absolute after:w-[25rem] after:h-[25rem] after:left-1/2 after:-translate-x-1/2 after:bottom-0  after:-z-20 after:blur-3xl after:opacity-[0.25] rotating_blob" />
      </div>
      <section>
        <div className="container">
          <h2 className="sm:text-h2 text-[32px] text-center text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium lg:max-w-[48%] m-auto">
            MT4/MT5 Services
          </h2>
          <p className="text-body opacity-50 font-medium lg:max-w-[45%] m-auto text-center">
            Benefit from the advanced MT4/MT5 Hosting and Monitoring or set-up
            your MT4/MT5 brokerage in less than a week, buy adding MT4/MT5 White
            Label to the Your Bourse Platform.
          </p>
        </div>
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-[5px] pt-24">
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div>
              <Image
                unoptimized
                className="w-full"
                src="/service/service-1.png"
                alt=""
                width="380"
                height="243"
              />
            </div>
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium sm:max-w-[60%] pb-3">
                MT4 / MT5 Hosting & Administration
              </h6>
              <p className="text-body opacity-50 font-medium ">
                Cost effective, ultra low latency hosting and security for
                MT4/MT5 servers in all Equinix data centres (NY4, LD4, TY3, and
                other locations)
              </p>
            </div>
            <div className="p-[10px] px-[15px] flex items-center justify-between mt-auto">
              <Link className="text-sm font-medium" href="/">
                Learn More
              </Link>
              <Link
                className=" w-6 h-6 rounded-full bg-[#B7D2FF0D] flex justify-center items-center p-[2px]"
                href="/"
              >
                <ChevronRightIcon />
              </Link>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div>
              <Image
                unoptimized
                className="w-full"
                src="/service/service-2.png"
                alt=""
                width="380"
                height="243"
              />
            </div>
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium sm:max-w-[38%] pb-3">
                MT4 / MT5 White Label
              </h6>
              <p className="text-body opacity-50 font-medium ">
                Your Bourse provides a turn-key solution for companies looking
                for a reliable provider to quickly launch an MT4/MT5 brokerage
                without purchasing a full MT4/MT5 license. The full set up is
                done within a week.
              </p>
            </div>
            <div className="p-[10px] px-[15px] flex items-center justify-between mt-auto">
              <Link className="text-sm font-medium" href="/">
                Learn More
              </Link>
              <Link
                className=" w-6 h-6 rounded-full bg-[#B7D2FF0D] flex justify-center items-center p-[2px]"
                href="/"
              >
                <ChevronRightIcon />
              </Link>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div>
              <Image
                unoptimized
                className="w-full"
                src="/service/service-3.png"
                alt=""
                width="380"
                height="243"
              />
            </div>
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium sm:max-w-[64%] pb-3">
                MT4/MT5 Access Server Management
              </h6>
              <p className="text-body opacity-50 font-medium ">
                Connectivity analysis and remote access server management to
                reduces MT4/MT5 trade server load and enhance DDoS protection.
              </p>
            </div>
            <div className="p-[10px] px-[15px] flex items-center justify-between mt-auto">
              <Link className="text-sm font-medium" href="/">
                Learn More
              </Link>
              <Link
                className=" w-6 h-6 rounded-full bg-[#B7D2FF0D] flex justify-center items-center p-[2px]"
                href="/"
              >
                <ChevronRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
