"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Seamless = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center items-center pt-[21.875rem] relative isolate">
        <div className="absolute isolate w-[28rem] h-[28rem] top-[85px] left-[50%] -translate-x-1/2 grid place-items-center before:absolute before:bg-[#B7D2FF1A] before:w-[15.625rem] before:h-[15.625rem] before:rounded-full before:blur-2xl -z-10">
          <motion.div
            className="absolute isolate w-[27.5rem] h-[27.5rem]"
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
          <motion.div
            className="absolute isolate w-[23.125rem] h-[23.125rem]"
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
          <Image
            className="relative z-10"
            src="/seamless-glow-frame.png"
            alt=""
            width="64"
            height="64"
          />
          <div className="absolute w-full h-full bg-gradient-to-t from-[#03070D] from-[50%] to-transparent z-[2]" />
        </div>
        <h4 className="text-h4 text-center text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium lg:max-w-[44%] m-auto">
          Experience Frictionless Trading WITH finbridge
        </h4>
        <p className="text-body opacity-50 font-medium lg:max-w-[29.5%] m-auto text-center">
          {`Experience trading at its best with Finbridge. Enjoy fast, reliable
          execution and real-time monitoring to stay ahead in the market.`}
        </p>
        <Button variant="secondary" className="mt-5">
          Schedule Demo
        </Button>
      </div>
      <div className="container max-w-[460px] py-16">
        <div className="grid grid-cols-5">
          <div>
            <Image src="/award-ph.png" alt="" width="79" height="65" />
          </div>
          <div>
            <Image src="/award-ph.png" alt="" width="79" height="65" />
          </div>
          <div>
            <Image src="/award-ph.png" alt="" width="79" height="65" />
          </div>
          <div>
            <Image src="/award-ph.png" alt="" width="79" height="65" />
          </div>
          <div>
            <Image src="/award-ph.png" alt="" width="79" height="65" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seamless;
