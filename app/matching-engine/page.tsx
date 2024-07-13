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
            Matching Engine
            </h4>
            <p className="text-body opacity-50 font-medium ">
            The best-of-breed Matching Engine that allows management of client order flow and provides lightining-fast execution of all basic and advanced order and expiry types.
            </p>

            <Button className="w-fit btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <Image src={"/matching-engine.png"} width={400} height={400} alt="" />
        </div>
      </section>

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[700px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center mb-5">
            Manage your order execution with one-click
            </h4>

            <p className="text-body opacity-50 font-medium text-center">
            Your Bourse Matching Engine allows brokers to effectively manage their order execution. All the trading parameters are configured in a user-friendly web-based GUI and all changes are immediately applied in the platform with no restart needed. The Matching Engine ensures accurate and lighting-fast execution of all basic and advanced order and expiry types.
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
                Cross-connects to 26+ banks and tier-2 Liquidity Providers (see the full list of Liquidity Providers)
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Hosting in Equinix data centres (LD4, LD5, NY4, NY5, CH1, HK1, TY3, FR2), CME Aurora (DC3), Interxion London (Lon1), Singapore (SGX) or Google Cloud
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
              Advanced Order Types
              </h6>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Limit, Market, Stop Limit, Stop Loss and OCO (One-Cancels-the-Other) orders
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                FOK (Fill or Kill), IOC (Immediate or Cancel), GTC (Good Till Cancelled), GTD (Good Till Date) and Valid For Milliseconds expiry types
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Proprietary data structure and algorithms used for Order Book to ensure O(1) complexity for all operations
              </p>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
              APIs
              </h6>

              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Market Data, Orders and Post Trade
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                High-performing and open-source
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Bindings for C++, C#, Java, Python, Go, Node.js, PHP, Ruby, Objective-C, Android Java and Dart
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;