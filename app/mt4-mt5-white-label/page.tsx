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
            MT4/MT5 White Label
            </h4>
            <p className="text-body opacity-50 font-medium ">
            A turn-key solution for companies looking for a reliable provider to quickly launch an MT4/MT5 brokerage. Your Bourse Liquidity Hub together with a fully branded MT4/MT5 trading platform is fully set up within a week.
            </p>

            <Button className="w-fit btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <Image src="/service/service-2.png" width={400} height={400} alt="" />
        </div>
      </section>

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[700px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center mb-5">
            Create an MT4/MT5 brokerage
            </h4>

            <p className="text-body opacity-50 font-medium text-center">
            Your Bourse MT4/MT5 White-Label services in cooperation with Itexsys provides a quick and easy way to start a financial services company. This cost-effective solution allows brokers to significantly save on the set-up and running overheads. White Label clients benefit from a fully managed technological solution at a fraction of the cost of running a full-scale financial brokerage with a 24/7 Technical Support.
            </p>
          </div>
        </div>

        <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-[5px] py-16 ">
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            MT4/MT5 White Label Features
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Multiple Manager logins with role and access level assignment</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Up to 25 client groups</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Up to 50 symbols</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Unlimited client accounts</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Change spreads in real time</p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Support
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>24/7 Level 2 Technical Support</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Real time monitoring and automatic mitigation</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Live notification system and proactive troubleshooting</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Onsite mitigation in case of hardware failure</p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
            Hosting
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Hosting in Equinix LD4</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Cross-connectivity between MT4/MT5 Severs, Your Bourse Platform and Liquidity Providers</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Highest level security and DDoS protection</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Full redundancy with real-time hot backups and automatic failover</p>
          </div>
      
        </div>

        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
         <div className="p-[15px]">
           <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
           Liquidity
           </h6>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Choose your own Liquidity Providers</p>
          <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Cross-connects to 30+ Liquidity Providers (see the full list of Liquidity Providers)</p>
          <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Relationship management and liquidity analytics</p>
          <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Seamless one-click integration with all Liquidity Providers</p>
         </div>
     
       </div>
       
      </div>

      </section>
    </div>
  );
};

export default page;
