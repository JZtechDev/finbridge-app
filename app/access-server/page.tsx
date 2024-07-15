import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";

const page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="pb-52 pt-44 relative isolate before:absolute before:w-[250rem] before:h-[250rem] before:-translate-x-1/2 before:left-1/2 before:bottom-28 before:bg-[#03070D] before:-z-10 before:rounded-full after:absolute after:w-[25rem] after:h-[25rem] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-[#28E7C5] after:-z-20 after:blur-3xl after:opacity-30">
        <div className="container flex justify-between items-center pb-10">
          <div className=" lg:max-w-[50%] m-auto flex flex-col gap-[25px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium">
              Access Server Management Service
            </h4>
            <p className="text-body opacity-50 font-medium ">
              Improve your MT4/MT5 Data Center connectivity and productivity -
              the remote access server analysis and routing service.
            </p>

            <Button className="w-fit btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <Image className="hidden lg:block" src="/service/service-3.png" width={400} height={400} alt="" />
        </div>
      </section>

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[700px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center mb-5">
              Increase your trade server performance
            </h4>

            <p className="text-body opacity-50 font-medium text-center">
             {` We analyse the brokers clients connections and create a network
              of data centers connected to the MT4/MT5 trade server in the most
              efficient way, which significantly reduces load of the trade
              server and protects it from DDoS attacks.`}
            </p>
          </div>
        </div>

        <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-[5px] py-16 ">
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
                Connectivity, Analysis and Monitoring
              </h6>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Brokers connection flow is analysed to create the best routes
                for the clients
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                24/7 health and latency monitoring
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                {`Provides a single bill for all access points in all locations,
                no need for signing with individual Data Сenters in the
                individual locations`}
              </p>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
                Based on VPN Mesh Network
              </h6>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Reduces latency between locations
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Enhances control of connectivity between remote access servers
                and MT4/MT5 trade server
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Dynamically changes the route between the remote access servers
              </p>
            </div>
          </div>
          <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
            <div className="p-[15px]">
              <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
                Enhanced Security & Performance
              </h6>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Enables natural DDos Protection due to decentralisation of the
                direct connection
              </p>
              <p className="text-body opacity-50 font-medium flex gap-2">
                <Check size={16} className="mt-1 !min-w-4 !min-h-4" />
                Significantly reduce MT4/MT5 Trade Server load
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
