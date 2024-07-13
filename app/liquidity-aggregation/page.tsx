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
            Liquidity Aggregation
            </h4>
            <p className="text-body opacity-50 font-medium ">
            Set up multiple liquidity pools and launch FIX API connections to providers with just one click in Your Bourse user-friendly web-based GUI
            </p>

            <Button className="w-fit btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <Image src={"/liquidity-aggr.svg"} width={400} height={400} alt="" />
        </div>
      </section>

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[700px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center mb-5">
            {`Connect to more than 30+ LP's with one-click`}
            </h4>

            <p className="text-body opacity-50 font-medium text-center">
           {` Your Bourse Liquidity aggregator is connected to 30+ industry-leading liquidity providers price feeds. The liquidity is aggregated into unique liquidity streams for Forex, CFDs, and cryptocurrencies. By setting up liquidity aggregation rules and parameters most suitable for their order flow, brokers deliver tighter spreads and bespoke execution to their clients.`}
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
                Cross-connects to 30+ banks and tier-2 Liquidity Providers (see the full list of Liquidity Providers)
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                {`Hosting in Equinix data centres (LD4, LD5, NY4, NY5, CH1, HK1, TY3, FR2), CME Aurora (DC3), Interxion London (Lon1), Singapore (SGX) or Google Cloud`}
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Written in C++ and run on Linux on Cascade Lake CPUs with 10 GB networking
              </p>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
              Price Aggregation
              </h6>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Mix prices from 30+ major banks and Tier 2 liquidity providers
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Advanced min/max spread and mark-up profiles
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Offer your clients tighter spreads and superior execution
              </p>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
              Smart Order Routing
              </h6>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Multiple liquidity pools per symbol
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Advanced A/B Book routing
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Dynamic routing based on margin utilisation with each liquidity provider
              </p>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
              Advanced spike filters
              </h6>

              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Multiple liquidity pools per symbol
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Advanced A/B Book routing
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Dynamic routing based on margin utilisation with each liquidity provider
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
