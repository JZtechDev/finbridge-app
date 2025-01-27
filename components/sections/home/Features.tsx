"use client";
import { Button } from "@/components/ui/button";
import Pill from "@/components/ui/pill";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Features = () => {
  const targetedRef: any = useRef(null);
  const sectionOne: any = useRef(null);
  const sectionTwo: any = useRef(null);
  const sectionThree: any = useRef(null);
  const sectionFour: any = useRef(null);
  const sectionFive: any = useRef(null);

  const sectionOneView = useInView(sectionOne, {
    margin: "-50% 0px 50% 0px",
  });
  const sectionTwoView = useInView(sectionTwo, {
    margin: "-50%",
  });
  const sectionThreeView = useInView(sectionThree, {
    margin: "-50%",
  });
  const sectionFourView = useInView(sectionFour, {
    margin: "-50%",
  });
  const sectionFiveView = useInView(sectionFive, {
    margin: "-200px 0px -150px 0px",
  });

  const { scrollYProgress } = useScroll({ target: targetedRef });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `-80%`]);

  let imageRender;
  if (sectionOneView) {
    imageRender = (
      <AnimatePresence>
        <motion.img
          className="ml-auto"
          src="/matching-engine.png"
          alt=""
          width="500"
          height="500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1500 }}
        />
      </AnimatePresence>
    );
  } else if (sectionTwoView) {
    imageRender = (
      <AnimatePresence>
        <motion.img
          className="ml-auto"
          src="/liquidity-aggr.svg"
          alt=""
          width="500"
          height="500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1500 }}
        />
      </AnimatePresence>
    );
  } else if (sectionThreeView) {
    imageRender = (
      <AnimatePresence>
        <motion.img
          className="ml-auto"
          src="/bridge-gateway.png"
          alt=""
          width="500"
          height="500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1500 }}
        />
      </AnimatePresence>
    );
  } else if (sectionFourView) {
    imageRender = (
      <AnimatePresence>
        <motion.img
          className="ml-auto"
          src="/risk-management.png"
          alt=""
          width="500"
          height="500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1500 }}
        />
      </AnimatePresence>
    );
  } else if (sectionFiveView) {
    imageRender = (
      <AnimatePresence>
        <motion.img
          className="ml-auto"
          src="/api-server.svg"
          alt=""
          width="500"
          height="500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1500 }}
        />
      </AnimatePresence>
    );
  }

  return (
    <>
      <section className="pt-20  relative isolate md:overflow-visible overflow-hidden">
        <div className=" relative isolate md:before:w-[580px] sm:before:w-[280px] before:w-[180px] md:before:h-[580px] sm:before:h-[280px] before:h-[180px] before:absolute before:bg-[#B7D2FF33] before:rounded-full sm:before:top-[-9rem] before:top-12 3xl:before:-right-[80px] 2xl:before:-right-0 before:blur-[150px] before:-z-10">
          <div className="xl:max-w-[40%] lg:max-w-[60%] m-auto">
            <h2 className="sm:text-h2 text-[32px] text-center text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium">
              What it Does & How Well it Does It
            </h2>
            <p className="text-body opacity-50 font-medium sm:max-w-[45%] m-auto text-center">
              {`FINBRIDGE offers a complete trading solution – all the tools you
              need, from the start, at one transparent price.`}
            </p>
          </div>
        </div>
        <div className="relative h-[500vh] hidden xl:block" ref={targetedRef}>
          <div className="sticky h-[100vh] isolate top-0 left-0">
            <motion.div className="isolate overflow-hidden" style={{ y }}>
              <motion.div
                ref={sectionOne}
                className="container h-screen grid 2xl:grid-cols-2 grid-cols-3 items-start relative isolate before:w-[36.25rem] before:absolute before:h-[36.25rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[10rem] before:-left-[230px] before:blur-[150px] before:-z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className=" self-center mt-8 xl:pl-4 2xl:col-span-1 xl:col-span-2 xl:justify-start justify-center xl:block flex flex-col">
                  <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[50%] mb-4">
                    Matching Engine
                  </h3>
                  <p className="text-body opacity-50 font-medium max-w-[68%]">
                    {`Powering Millions of Trades: Experience the unmatched performance of FINBRIDGE's matching engine, built to handle high-volume trading seamlessly from forex to crypto and beyond.`}
                  </p>
                  <ul className="py-10 flex flex-wrap gap-[5px]">
                    <li>
                      <Pill>Low-latency Engine</Pill>
                    </li>
                    <li>
                      <Pill>C++ on Linux</Pill>
                    </li>
                    <li>
                      <Pill>Various Order Types</Pill>
                    </li>
                    <li>
                      <Pill>Multiple expiry types</Pill>
                    </li>
                    <li>
                      <Pill>A/B book routing</Pill>
                    </li>
                    <li>
                      <Pill>High-performance API</Pill>
                    </li>
                    <li>
                      <Pill>Equinix hosting</Pill>
                    </li>
                  </ul>
                  <Button className="mr-[10px]">Discover More</Button>
                  <Button className="btn-shadow" variant="secondary">
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
              <motion.div
                ref={sectionTwo}
                className="container h-screen grid 2xl:grid-cols-2 grid-cols-3 items-start relative isolate"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className=" self-center mt-8 xl:pl-4 2xl:col-span-1 col-span-2">
                  <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium mb-4">
                    Liquidity Aggregation
                  </h3>
                  <p className="text-body opacity-50 font-medium max-w-[66%]">
                    {`Our advanced system aggregates prices from multiple sources, providing a clearer picture of market value. Define custom rules and parameters for your order flow, ensuring the most efficient execution for your trades.`}
                  </p>
                  <ul className="py-10 flex flex-wrap gap-[5px] max-w-[60%]">
                    <li>
                      <Pill>Enhanced Market Transparency</Pill>
                    </li>
                    <li>
                      <Pill>30+ liquidity providers</Pill>
                    </li>
                    <li>
                      <Pill>Global Equinix hosting</Pill>
                    </li>
                    <li>
                      <Pill>Liquidity pools</Pill>
                    </li>
                    <li>
                      <Pill>Smart routing</Pill>
                    </li>
                    <li>
                      <Pill>Spike filters & mark-up</Pill>
                    </li>
                  </ul>
                  <Button className="mr-[10px]">Discover More</Button>
                  <Button className="btn-shadow" variant="secondary">
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
              <motion.div
                ref={sectionThree}
                className="container h-screen grid 2xl:grid-cols-2 grid-cols-3 items-start relative isolate before:w-[20rem] before:absolute before:h-[20rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[-10rem] before:-right-[230px] before:blur-[150px] before:-z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className=" self-center mt-8 xl:pl-4 2xl:col-span-1 col-span-2">
                  <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[80%] mb-4">
                    MT4 Bridge / MT5 Gateway
                  </h3>
                  <p className="text-body opacity-50 font-medium max-w-[66%]">
                    {`Unlock the Power of Two Platforms: Unleash the combined potential of FINBRIDGE and MT4/MT5 with our powerful & streamlined plugins.`}
                  </p>
                  <ul className="py-10 flex flex-wrap gap-[5px] max-w-[66%]">
                    <li>
                      <Pill>99.99% Uptime Guarantee</Pill>
                    </li>
                    <li>
                      <Pill>Configurable routing</Pill>
                    </li>
                    <li>
                      <Pill>A/B assignment rules</Pill>
                    </li>
                    <li>
                      <Pill>Complex mark-ups</Pill>
                    </li>
                    <li>
                      <Pill>Real-time updates</Pill>
                    </li>
                  </ul>
                  <Button className="mr-[10px]">Discover More</Button>
                  <Button className="btn-shadow" variant="secondary">
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
              <motion.div
                ref={sectionFour}
                className="container h-screen grid 2xl:grid-cols-2 grid-cols-3 items-start relative isolate before:w-[36.25rem] before:absolute before:h-[36.25rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[10rem] before:-left-[230px] before:blur-[150px] before:-z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className=" self-center mt-8 xl:pl-4 2xl:col-span-1 col-span-2">
                  <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[90%] mb-4">
                    Risk Management & Reporting
                  </h3>
                  <p className="text-body opacity-50 font-medium max-w-[68%]">
                    {`Access a wealth of historic and real-time data instantly. FINBRIDGE automatically analyses over 100 data points, delivering custom reports tailored to your needs.`}
                  </p>
                  <ul className="py-10 flex flex-wrap gap-[5px] max-w-[60%]">
                    <li>
                      <Pill>Info reports</Pill>
                    </li>
                    <li>
                      <Pill>Real-time P/L</Pill>
                    </li>
                    <li>
                      <Pill>Rejection monitoring</Pill>
                    </li>
                    <li>
                      <Pill>Informed decisions</Pill>
                    </li>
                    <li>
                      <Pill>API data access</Pill>
                    </li>
                    <li>
                      <Pill>Google reports</Pill>
                    </li>
                  </ul>
                  <Button className="mr-[10px]">Learn More</Button>
                  <Button className="btn-shadow" variant="secondary">
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
              <motion.div
                ref={sectionFive}
                className="container h-screen grid 2xl:grid-cols-2 grid-cols-3 items-start relative isolate"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className=" self-center mt-8 xl:pl-4 2xl:col-span-1 col-span-2">
                  <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[80%] mb-4">
                    Fully functional FIX API Server
                  </h3>
                  <p className="text-body opacity-50 font-medium max-w-[68%]">
                    Fully functional FIX API Server with Margin Accounts in
                    MT4/MT5. Issue FIX Sessions and apply all configurations in
                    real time (no restart needed), including symbols, mark-ups,
                    IP whitelisting etc...
                  </p>
                  <ul className="py-10 flex flex-wrap gap-[5px] max-w-[60%]">
                    <li>
                      <Pill>Real-time FIX config</Pill>
                    </li>
                    <li>
                      <Pill>On-the-go FIX API</Pill>
                    </li>
                    <li>
                      <Pill>Mark-up & bands</Pill>
                    </li>
                    <li>
                      <Pill>Real-time IP whitelist</Pill>
                    </li>
                    <li>
                      <Pill>MT4/MT5 margin accounts</Pill>
                    </li>
                  </ul>
                  <Button className="mr-[10px]">Learn More</Button>
                  <Button className="btn-shadow" variant="secondary">
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="max-w-[31.25rem] absolute top-1/2 -translate-y-1/2 2xl:right-64 right-28 origin-center xl:block hidden">
              <AnimatePresence>{imageRender}</AnimatePresence>
            </motion.div>
          </div>
        </div>
        <div className="relative isolate xl:hidden block">
          <div className="container py-10 relative isolate before:w-[36.25rem] before:absolute before:h-[36.25rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[10rem] before:-left-[230px] before:blur-[150px] before:-z-10">
            <div className=" mt-8 justify-center items-center text-center flex flex-col">
              <img
                className="m-auto mb-4"
                src="/matching-engine.png"
                alt=""
                width="500"
                height="500"
              />
              <h3 className="sm:text-h3 text-[28px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium sm:max-w-[50%] mb-4">
                Matching Engine
              </h3>
              <p className="text-body opacity-50 font-medium sm:max-w-[55%]">
                The core of Your Bourse Platform. The matching engine is a trade
                execution engine suitable for all financial instruments: spot
                FX, CFD’s, Crypto, Crypto spot, Stocks, Stock Indices,
                Commodities, you name it.
              </p>
              <ul className="py-10 flex flex-wrap justify-center gap-[5px] sm:max-w-[80%]">
                <li>
                  <Pill>Low-latency Engine</Pill>
                </li>
                <li>
                  <Pill>C++ on Linux</Pill>
                </li>
                <li>
                  <Pill>Various Order Types</Pill>
                </li>
                <li>
                  <Pill>Multiple expiry types</Pill>
                </li>
                <li>
                  <Pill>A/B book routing</Pill>
                </li>
                <li>
                  <Pill>High-performance API</Pill>
                </li>
                <li>
                  <Pill>Equinix hosting</Pill>
                </li>
              </ul>
              <div>
                <Button className="mr-[10px]">Learn More</Button>
                <Button className="btn-shadow" variant="secondary">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
          <div className="container py-10 relative isolate">
            <div className="mt-8 xl:pl-4 justify-center text-center items-center flex flex-col">
              <img
                className="m-auto mb-4"
                src="/liquidity-aggr.svg"
                alt=""
                width="500"
                height="500"
              />
              <h3 className="sm:text-h3 text-[28px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium sm:max-w-[50%] mb-4">
                Liquidity Aggregation
              </h3>
              <p className="text-body opacity-50 font-medium sm:max-w-[55%]">
                Liquidity aggregation from multiple liquidity sources into the
                unique price feeds. Set up aggregation rules and parameters
                specific to your order flow to deliver bespoke execution to your
                clients.
              </p>
              <ul className="py-10 flex flex-wrap justify-center gap-[5px] sm:max-w-[60%]">
                <li>
                  <Pill>Price aggregation</Pill>
                </li>
                <li>
                  <Pill>30+ liquidity providers</Pill>
                </li>
                <li>
                  <Pill>Global Equinix hosting</Pill>
                </li>
                <li>
                  <Pill>Liquidity pools</Pill>
                </li>
                <li>
                  <Pill>Smart routing</Pill>
                </li>
                <li>
                  <Pill>Spike filters & mark-up</Pill>
                </li>
              </ul>
              <div>
                <Button className="mr-[10px]">Learn More</Button>
                <Button className="btn-shadow" variant="secondary">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
          <div className="container py-10 relative isolate before:hidden xl:before:block before:w-[20rem] before:absolute before:h-[20rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[-10rem] before:-right-[230px] before:blur-[150px] before:-z-10">
            <div className=" mt-8 xl:pl-4  justify-center text-center items-center flex flex-col">
              <img
                className="m-auto mb-4"
                src="/bridge-gateway.png"
                alt=""
                width="500"
                height="500"
              />
              <h3 className="sm:text-h3 text-[28px] text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium sm:max-w-[55%] mb-4">
                MT4 Bridge / MT5 Gateway
              </h3>
              <p className="text-body opacity-50 font-medium sm:max-w-[55%]">
                High performance, lightweight, easy to install plugins that
                connect Your Bourse platform to MT4 and MT5 servers.
              </p>
              <ul className="py-10 flex flex-wrap justify-center gap-[5px] sm:max-w-[60%]">
                <li>
                  <Pill>High-performance stability</Pill>
                </li>
                <li>
                  <Pill>Configurable routing</Pill>
                </li>
                <li>
                  <Pill>A/B assignment rules</Pill>
                </li>
                <li>
                  <Pill>Complex mark-ups</Pill>
                </li>
                <li>
                  <Pill>Real-time updates</Pill>
                </li>
              </ul>
              <div>
                <Button className="mr-[10px]">Learn More</Button>
                <Button className="btn-shadow" variant="secondary">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
          <div className="container py-10 relative isolate before:w-[36.25rem] before:absolute before:h-[36.25rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[10rem] before:-left-[230px] before:blur-[150px] before:-z-10">
            <div className=" mt-8 xl:pl-4 justify-center items-center text-center flex flex-col">
              <img
                className="m-auto mb-4"
                src="/risk-management.png"
                alt=""
                width="500"
                height="500"
              />
              <h3 className="sm:text-h3 text-[28px]  text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium sm:max-w-[80%] mb-4">
                Risk Management & Reporting
              </h3>
              <p className="text-body opacity-50 font-medium sm:max-w-[55%]">
                Historic and real-time trade data available at your fingertips.
                Your Bourse mines, slices, and pre-calculates 89 data items to
                offer tailor-made reporting.
              </p>
              <ul className="py-10 flex flex-wrap justify-center gap-[5px] sm:max-w-[60%]">
                <li>
                  <Pill>Info reports</Pill>
                </li>
                <li>
                  <Pill>Real-time P/L</Pill>
                </li>
                <li>
                  <Pill>Rejection monitoring</Pill>
                </li>
                <li>
                  <Pill>Informed decisions</Pill>
                </li>
                <li>
                  <Pill>API data access</Pill>
                </li>
                <li>
                  <Pill>Google reports</Pill>
                </li>
              </ul>
              <div>
                <Button className="mr-[10px]">Learn More</Button>
                <Button className="btn-shadow" variant="secondary">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
          <div className="container py-10 relative isolate">
            <div className="mt-8 xl:pl-4 justify-center items-center text-center flex flex-col">
              <img
                className="m-auto mb-4"
                src="/api-server.svg"
                alt=""
                width="500"
                height="500"
              />
              <h3 className="sm:text-h3 text-[28px]  text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium sm:max-w-[70%] mb-4">
                Fully functional FIX API Server
              </h3>
              <p className="text-body opacity-50 font-medium sm:max-w-[56%]">
                Fully functional FIX API Server with Margin Accounts in MT4/MT5.
                Issue FIX Sessions and apply all configurations in real time (no
                restart needed), including symbols, mark-ups, IP whitelisting
                etc...
              </p>
              <ul className="py-10 flex flex-wrap justify-center gap-[5px] sm:max-w-[60%]">
                <li>
                  <Pill>Real-time FIX config</Pill>
                </li>
                <li>
                  <Pill>On-the-go FIX API</Pill>
                </li>
                <li>
                  <Pill>Mark-up & bands</Pill>
                </li>
                <li>
                  <Pill>Real-time IP whitelist</Pill>
                </li>
                <li>
                  <Pill>MT4/MT5 margin accounts</Pill>
                </li>
              </ul>
              <div>
                <Button className="mr-[10px]">Learn More</Button>
                <Button className="btn-shadow" variant="secondary">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="overflow-x-hidden min-w-full h-[338px]">
        <div className="relative before:absolute h-[200px] lg:before:w-[4000px] lg:before:h-[4000px] sm:before:w-[2000px] before:w-[1000px] sm:before:h-[2000px] before:h-[1000px] before:-translate-x-1/2 before:left-1/2 before:bottom-28 before:bg-[#03070D] before:-z-10 before:rounded-full after:absolute after:w-[25rem] after:h-[25rem] after:left-1/2 after:-translate-x-1/2 after:bottom-0  after:-z-20 after:blur-3xl after:opacity-[0.25] rotating_blob" />
      </div> */}
    </>
  );
};

export default Features;
