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
              FIX API Connectivity
            </h4>
            <p className="text-body opacity-50 font-medium ">
              Connections to your retail and institutional clients to deliver
              bespoke liquidity and execution. Issue FIX API Sessions on the go
              from Your Bourse cloud portal.
            </p>

            <Button className="w-fit btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <Image src={"/api-server.svg"} width={400} height={400} alt="" />
        </div>
      </section>

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[700px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center mb-5">
              FIX API Connectivity
            </h4>

            <p className="text-body opacity-50 font-medium text-center">
              Your Bourse FIX API Server is specifically design for brokers
              looking to have full control over their liquidity distribution.
              All the FIX API parameters are easily configured in the friendly
              web-based GUI including IP whitelisting and issuing FIX Sessions
              on the go. There is no need to turn to Your Bourse technical
              support to apply settings or issue credentials and all changes are
              applied in real time.
            </p>
          </div>
        </div>

        <div className="container grid lg:grid-cols-4 md:grid-cols-2 gap-[5px] py-16">
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Customisable FIX API Settings
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Advanced Mark-up Profiles</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Customisable Spread Profiles</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Customisable Volume Bands</p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Monitoring Alerts
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
            Configuration Portal
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Issue FIX API Session on the go</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Whitelist IP addresses</p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
         <div className="p-[15px]">
           <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
           Margin Accounts
           </h6>
      
          <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/> Connectivity analysis and remote access server management to</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Set different exposure limits</p>
          
         </div>
     
       </div>
      </div>

      </section>
    </div>
  );
};

export default page;
