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
            Risk Management and Reporting
            </h4>
            <p className="text-body opacity-50 font-medium ">
            Create a data-driven culture and better customer experiences with our state-of-art reporting tools and risk management settings
            </p>

            <Button className="w-fit btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <Image className="hidden lg:block" src={"/risk-management.png"} width={400} height={400} alt="" />
        </div>
      </section>

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[700px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center mb-5">
            Have all data at your fingertips
            </h4>

            <p className="text-body opacity-50 font-medium text-center">
            Real-time, low latency big data mining and slicing allows you to analyse as complex data sets as you may need for your day-to-day informed business decisions. The platform minces, slices, and pre-calculates 89 data items to offer tailor-made reporting.
            </p>
          </div>
        </div>

        <div className="container grid lg:grid-cols-4 md:grid-cols-2 gap-[5px] py-16">
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Risk Management
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Monitor your exposure and P/L in real-time</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Control your market risk</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Flexible A/B book assignment rules</p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Reporting
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Efficiently manage your order flow with real-time reporting</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Management Information reports</p>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Monitor rejection rates and execution times in real-time</p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
            Data Warehouse
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Real-time, low latency big data mining and slicing</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Excellent query performance without impacting the operational systems</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Analyse datasets as complex as you may need</p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
         <div className="p-[15px]">
           <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
           APIs
           </h6>
      
          <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Access to real-time raw data</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Access to reports and pre-calculated data</p>
           <p className="text-body opacity-50 font-medium flex gap-2"><Check size={16} className="mt-1 !min-w-4 !min-h-4"/>Create your own reports in Google Data Studio</p>
          
         </div>
     
       </div>
      </div>

      </section>
    </div>
  );
};

export default page;
