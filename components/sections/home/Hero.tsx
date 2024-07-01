import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container pt-48 pb-[320px]">
        <div className="flex flex-col items-center justify-center gap-5 text-center max-w-[50%] m-auto">
          <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium">
            Order Execution and Reporting for{" "}
            <span className="text-[#28E7C5]">MT4</span>,{" "}
            <span className="text-[#28E7C5]">MT5</span> and{" "}
            <span className="text-[#28E7C5]">Crypto</span> Brokers
          </h4>
          <p className="text-body opacity-50 font-medium max-w-[70%] m-auto">
            {`Multi-asset liquidity aggregation, order matching, risk management,
            client profiling, reporting, and business analytics`}
          </p>
          <Button>See How it Works</Button>
        </div>
        <div
          className="flex justify-center items-center m-auto absolute w-[33.75rem] h-[33.75rem] -z-20 bottom-[-12.5rem] left-[49.5%] -translate-x-1/2 before:absolute before:w-[19.125rem] before:h-[19.125rem] before:bg-[#B7D2FF1A] before:top-1/4 before:left-[21%] before:rounded-full before:blur-3xl before:-z-10"
          style={{ background: "url(/dotted-circle.svg)" }}
        >
          <Image src="/glow-frame.png" alt="" width="84" height="84" />
        </div>
        <div className="w-full h-[80%] bg-[#07112133] absolute left-0 bottom-0 -z-10 rounded-full blur-3xl before_circle-elements before:w-[75rem] before:h-[75rem] pointer-events-none " />
      </div>
      <div className="relative">
        <div className="container pt-12 grid grid-cols-3">
          <p className=" col-span-1 opacity-50 text-center">
            {`Multi-asset liquidity aggregation, order matching, risk management,
            client profiling, reporting, and business analytics`}
          </p>
          <p className=" col-span-1 col-start-3 opacity-50 text-center">
            {`Experience trading at its best with Finbridge. Enjoy fast, reliable
            execution and real-time monitoring to stay ahead in the market.`}
          </p>
        </div>
        <Image
          src="/main_bnr-clip.svg"
          alt=""
          width="100"
          height="88"
          className="absolute left-0 bottom-0 w-full h-full -z-10 object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
