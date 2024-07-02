import { Button } from "@/components/ui/button";
import Image from "next/image";

const Seamless = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center items-center pt-[21.875rem] relative isolate">
        <div
          className="bg-no-repeat absolute isolate w-[28rem] h-[28rem] top-[85px] left-[50%] -translate-x-1/2 grid place-items-center before:absolute before:bg-[#B7D2FF1A] before:w-[15.625rem] before:h-[15.625rem] before:rounded-full before:blur-2xl -z-10"
          style={{
            backgroundImage: "url(/hald-dotted-circle.png)",
            backgroundPosition: "top center",
          }}
        >
          <Image
            className="relative z-10"
            src="/seamless-glow-frame.png"
            alt=""
            width="64"
            height="64"
          />
          <div className="absolute w-full h-[50%] bg-gradient-to-t from-[#03070D] from-[50%] to-transparent z-[2]" />
        </div>
        <h4 className="text-h4 text-center text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[40%] m-auto">
          Unlock Seamless Trading with Finbridge
        </h4>
        <p className="text-body opacity-50 font-medium max-w-[25%] m-auto text-center">
          Experience trading at its best with Finbridge. Enjoy fast, reliable
          execution and real-time monitoring to stay ahead in the market.
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
