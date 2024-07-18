"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden ">
      <div className="container sm:pt-48 pt-36 pb-[320px]">
        <div className="flex flex-col items-center justify-center gap-5 text-center lg:max-w-[70%] m-auto">
          <h4 className="sm:text-h4 text-[32px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium">
            Empower Your Brokerage width{" "}
            <span className="text-[#28E7C5]">Comprehensive</span>,{" "}
            <span className="text-[#28E7C5]">Trading</span>{" "}
            <span className="text-[#28E7C5]">Solutions</span>
          </h4>
          <ul className="text-left">
            <li className="text-body opacity-50 font-medium lg:max-w-[70%] m-auto mb-1">
              <span className="text-[#28E7C5] font-semibold">{`•	Effortless Order Handling:`}</span>{" "}
              {`Aggregate liquidity across assets, streamline order matching, and manage risk for MT4, MT5, and Crypto trading – all within a unified platform.`}
            </li>
            <li className="text-body opacity-50 font-medium lg:max-w-[70%] m-auto mb-1">
              <span className="text-[#28E7C5] font-semibold">{`•	Deeper Client Understanding:`}</span>{" "}
              {`Gain valuable insights into your clients with comprehensive profiling tools.`}
            </li>
            <li className="text-body opacity-50 font-medium lg:max-w-[70%] m-auto mb-1">
              <span className="text-[#28E7C5] font-semibold">{`•	Data-Driven Strategies:`}</span>{" "}
              {`Make informed decisions with robust reporting and business analytics functionalities.`}
            </li>
          </ul>
          <Button>Here's how it functions</Button>
        </div>
        <div className="flex justify-center items-center m-auto absolute w-[33.75rem] h-[33.75rem] -z-20 lg:bottom-[-12.5rem] sm:bottom-[-7.5rem] xsm:bottom-[-2rem] left-[49.5%] -translate-x-1/2 before:absolute before:w-[19.125rem] before:h-[19.125rem] before:bg-[#B7D2FF1A] before:top-1/4 before:left-[21%] before:rounded-full before:blur-3xl before:-z-10">
          <motion.div
            className="absolute isolate w-[33.75rem] h-[33.75rem] -z-40"
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "360deg" }}
            transition={{
              repeat: Infinity,
              duration: 100,
              yoyo: "infinity",
              ease: "linear",
            }}
          >
            <img
              className="absolute w-full h-full"
              src="/big-circle.png"
              alt=""
            />
          </motion.div>
          <div className="absolute w-full h-full  -z-30" />
          <motion.div
            className="absolute isolate w-[27.5rem] h-[27.5rem] -z-50"
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "-360deg" }}
            transition={{
              repeat: Infinity,
              duration: 100,
              yoyo: "infinity",
              ease: "linear",
            }}
          >
            <img
              className="absolute w-full h-full"
              src="/small-circle.png"
              alt=""
            />
          </motion.div>
          <Image src="/glow-frame.png" alt="" width="84" height="84" />
        </div>
        <div className="w-full h-[80%] bg-[#07112133] absolute left-0 bottom-0 -z-10 rounded-full blur-3xl before_circle-elements before:w-[75rem] before:h-[75rem] pointer-events-none " />
      </div>
      <div className="lg:bg-gradient-to-t lg:from-transparent lg:to-transparent bg-gradient-to-t from-[#03070d] from-[80%] to-transparent">
        <div className="relative container ">
          <div className="container pt-12 lg:grid flex flex-col gap-2 lg:grid-cols-3">
            <p className=" col-span-1 opacity-50 text-center text-[14px] sm:text-[16px]">
              {`Manage orders, mitigate risk, gain client insights for all your asset offerings and make data-driven decisions for your brokerage.`}
            </p>
            <p className=" col-span-1 col-start-3 opacity-50 text-center text-[14px] sm:text-[16px]">
              {`Finbridge: Where Speed Meets Accuracy: Experience lightning-fast trade execution, reliable order matching, and real-time market data – all on one platform.`}
            </p>
          </div>
          <Image
            src="/main_bnr-clip.svg"
            alt=""
            width="100"
            height="88"
            className="absolute left-0 bottom-0 w-full h-full lg:block hidden -z-10 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
