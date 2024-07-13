import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";

const page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="pb-52 pt-44 relative isolate before:absolute before:w-[250rem] before:h-[250rem] before:-translate-x-1/2 before:left-1/2 before:bottom-28 before:bg-[#03070D] before:-z-10 before:rounded-full after:absolute after:w-[25rem] after:h-[25rem] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-[#28E7C5] after:-z-20 after:blur-3xl after:opacity-30">
        <div className="container flex justify-between items-center pb-10">
          <div className=" md:max-w-[50%] m-auto flex flex-col gap-[25px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium">
              MT4 Bridge / MT5 Gateway
            </h4>
            <p className="text-body opacity-50 font-medium ">
              Connect your MT4/5 servers to aggregated liquidity and low-latency
              matching engine via high performing and light-weighted MT4 Bridge
              and MT5 Gateway
            </p>

            <Button className="w-fit btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <Image src={"/bridge-gateway.png"} width={400} height={400} alt="" />
        </div>
      </section>

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[700px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center mb-5">
              High performance connection to MT4/MT5
            </h4>

            <p className="text-body opacity-50 font-medium text-center">
              MT4 Bridge and MT5 Gateway are integral parts of Your Bourse
              Platform. The plugins allow retail brokers to connect the Your
              Bourse platform to their MT4/MT5 trading platform to manage their
              business more effectively and optimise order processing.
            </p>
          </div>
        </div>

        <div className="container grid lg:grid-cols-4 md:grid-cols-2 gap-[5px] py-16">
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
                Ultra-low latency
              </h6>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                High performing, light-weighted and stable solution
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Written in C++ using MT4 Server API and MT5 Gateway API
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Proprietary data structure and algorithms used for Order Book to
                ensure O(1) complexity for all operations
              </p>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
                Smart execution
              </h6>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Advanced A/B Book assignment rules
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Protection against trading at outdated prices
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Advanced spike filters
              </p>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
                Smart pricing
              </h6>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Protection against off-market quotes
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Advanced min/max spread and mark-up profiles
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                All changes are applied in real-time – no restart is required
              </p>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
                Reporting and Risk Management
              </h6>

              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Monitor your exposure and P/L in real-time
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Control your market risk
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Efficiently manage your order flow with real-time reporting
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
