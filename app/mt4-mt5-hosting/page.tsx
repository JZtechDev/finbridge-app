import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";

const page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="pb-52 pt-44 relative isolate before:absolute before:w-[250rem] before:h-[250rem] before:-translate-x-1/2 before:left-1/2 before:bottom-28 before:bg-[#03070D] before:-z-10 before:rounded-full after:absolute after:w-[25rem] after:h-[25rem] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-[#28E7C5] after:-z-20 after:blur-3xl after:opacity-30">
        <div className="container flex justify-between items-center pb-10">
          <div className="lg:max-w-[50%] m-auto flex flex-col gap-[25px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium">
            MT4/MT5 Hosting & Administration
            </h4>
            <p className="text-body opacity-50 font-medium ">
            Premier class, cost effective, ultra low latency hosting, security, infrastructure and administration service for MT4 and MT5 brokers.
            </p>

            <Button className="w-fit btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <Image className="hidden lg:block" src="/service/service-1.png" width={400} height={400} alt="" />
        </div>
      </section>

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[700px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center mb-5">
            Hassle free infrastructure in Equinix data centers
            </h4>

            <p className="text-body opacity-50 font-medium text-center">
            Your Bourse hosting solution is a premier class infrastructure service for MT4 and MT5 brokers. With this service, we take full responsibility for running, managing, and maintaining all MT4/MT5 servers. Hosting is available in all Equinix data centers across the globe along with cross-connection between MT4/MT5, Your Bourse Platform, and Liquidity Providers.
            </p>
          </div>
        </div>

        <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-[5px] py-16 ">
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Real-time Monitoring and Troubleshooting
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Advanced Mark-up Profiles</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Customisable Spread Profiles</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Customisable Volume Bands</p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Equinix data centres (NY4, LD4, TY3, and others)
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Price Feed Alerts</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Trading and Rejection Alerts</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Liquidity Pool Streaming Alerts</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Margin Alerts</p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
            Security and Failover
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Full redundancy with real-time hot backups and automatic failover</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Watchdog servers located in a dedicated failover facility</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Ultra-low latency network between all Data Centres</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>DDoS Protection with up to 300Gbps of DDoS traffic</p>
          </div>
      
        </div>
       
      </div>

      </section>
    </div>
  );
};

export default page;
