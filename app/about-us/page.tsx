import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";

const page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="pb-52 pt-44 relative isolate before:absolute before:w-[250rem] before:h-[250rem] before:-translate-x-1/2 before:left-1/2 before:bottom-28 before:bg-[#03070D] before:-z-10 before:rounded-full after:absolute after:w-[25rem] after:h-[25rem] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-[#28E7C5] after:-z-20 after:blur-3xl after:opacity-30">
        <div className="container pb-10">
          <div className="m-auto flex flex-col gap-[25px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium">
            Meet Your Bourse
            </h4>
            <p className="text-body opacity-50 font-medium ">
            Your Bourse is a close-knit team of IT and financial geeks united by the belief that financial firms should focus on their core business and not the IT infrastructure. We build an elegant, human-friendly, and, most importantly, fault-tolerant solution within the rapidly growing financial environment. Our mission is to help financial firms succeed in the challenging financial industry.
            </p>

            {/* <Button className="w-fit btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button> */}
          </div>
        </div>
      </section>

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[700px]">
            <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center mb-5">
            Our team
            </h4>
          </div>
        </div>

        <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-[5px] py-16 ">
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Andrey Vedikhin
            </h6>
            <h6 className="text-[17px] mt-[-15px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Founder, CEO/CTO
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2">
            {`Andrey was one of the founders and ex-owners of Alpari Group (FX and CFD’s retail brokerage firm). Under Andrey’s management Alpari became a top FX/CFD broker worldwide. Andrey is Your Bourse’s Founder, CEO and CTO.`}
            </p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            Elina Pedersen
            </h6>
            <h6 className="text-[17px] mt-[-15px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px] ">
            CO-CEO/CMO
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2">
            {`With 15 years of experience in the fields of marketing, compliance and strategy in the FX industry, Elina is responsible for the company’s strategic development and partnerships. Elina also helps our clients bring their business to the next level.`}
            </p>
          </div>
      
        </div>
        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
          <div className="p-[15px]">
            <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
            Kate Rutkovskaya
            </h6>
            <h6 className="text-[17px] mt-[-15px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
            COO
            </h6>
            <p className="text-body opacity-50 font-medium flex gap-2">
            {`Having worked for various financial companies, from retail brokerage to an HFT firm, Kate has a vast knowledge of financial technology. At Your Bourse Kate takes care of daily operations, product and business development.`}
            </p>
           </div>
      
        </div>

        <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
         
         <div className="p-[15px]">
           <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
           Tadas Pranckevicius
           </h6>
           <h6 className="text-[17px] mt-[-15px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
           HEAD OF R&D
           </h6>
           <p className="text-body opacity-50 font-medium flex gap-2">
           {`Tadas has been building financial software systems. He’s leading Your Bourse R&D with his experience in hedge fund, investment banking and proprietary algorithmic trading technologies.`}
           </p>
         </div>
     
       </div>

       <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
        
         <div className="p-[15px]">
           <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
           Ivan Evdokimtsev
           </h6>
           <h6 className="text-[17px] mt-[-15px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
           HEAD OF UX
           </h6>
           <p className="text-body opacity-50 font-medium flex gap-2">
           {`An experienced UX designer and front-end developer, Ivan applies interactive and visual design principles in Your Bourse web applications for a seamless user experience.`}
           </p>
          </div>
     
       </div>

       <div className="bg-[#040A1466] border border-[#B7D2FF26] p-[10px] rounded-[20px] flex flex-col gap-[15px]">
        
        <div className="p-[15px]">
          <h6 className="text-h6 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
          Mikael Gael
          </h6>
          <h6 className="text-[17px] mt-[-15px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium pb-[20px]">
          HEAD OF TECHNICAL SUPPORT
          </h6>
          <p className="text-body opacity-50 font-medium flex gap-2">
          {`A Software Engineer with many years of experience in customer support and project management, Mikael liaises with the Development and Technical Support team to provide Your Bourse’s clients with the fastest IT service in the industry.`}
          </p>
        </div>
    
      </div>
       
      </div>

      </section>
    </div>
  );
};

export default page;
