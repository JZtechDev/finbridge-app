import { Button } from "@/components/ui/button";
import Pill from "@/components/ui/pill";
import { Check } from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <section className="py-20 relative isolate before:w-[36.25rem] before:absolute before:h-[36.25rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[-9rem] before:-right-[100px] before:blur-[150px] before:-z-10">
      <div className="max-w-[40%] m-auto">
        <h2 className="text-h2 text-center text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium">
          Features & Functionality
        </h2>
        <p className="text-body opacity-50 font-medium max-w-[45%] m-auto text-center">
          Your Bourse is a platform-as-a-service. All current and future
          platform features are available to all Your Bourse clients for no
          extra costs.
        </p>
      </div>
      <div className="container py-20 relative isolate before:w-[36.25rem] before:absolute before:h-[36.25rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[10rem] before:-left-[230px] before:blur-[150px] before:-z-10">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[50%] mb-4">
              Matching Engine
            </h3>
            <p className="text-body opacity-50 font-medium max-w-[55%]">
              The core of Your Bourse Platform. The matching engine is a trade
              execution engine suitable for all financial instruments: spot FX,
              CFD’s, Crypto, Crypto spot, Stocks, Stock Indices, Commodities,
              you name it.
            </p>
            <ul className="py-10 flex flex-wrap gap-[5px] max-w-[80%]">
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
            <Button className="mr-[10px]">Learn More</Button>
            <Button className="btn-shadow" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <div>
            <Image
              className="ml-auto"
              src="/matching-engine.png"
              alt=""
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="container py-20 relative isolate">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[50%] mb-4">
              Liquidity Aggregation
            </h3>
            <p className="text-body opacity-50 font-medium max-w-[55%]">
              Liquidity aggregation from multiple liquidity sources into the
              unique price feeds. Set up aggregation rules and parameters
              specific to your order flow to deliver bespoke execution to your
              clients.
            </p>
            <ul className="py-10 flex flex-wrap gap-[5px] max-w-[60%]">
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
            <Button className="mr-[10px]">Learn More</Button>
            <Button className="btn-shadow" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <div>
            <Image
              className="ml-auto"
              src="/liquidity-aggr.svg"
              alt=""
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="container py-20 relative isolate before:w-[20rem] before:absolute before:h-[20rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[-10rem] before:-right-[230px] before:blur-[150px] before:-z-10">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[55%] mb-4">
              MT4 Bridge / MT5 Gateway
            </h3>
            <p className="text-body opacity-50 font-medium max-w-[55%]">
              High performance, lightweight, easy to install plugins that
              connect Your Bourse platform to MT4 and MT5 servers.
            </p>
            <ul className="py-10 flex flex-wrap gap-[5px] max-w-[60%]">
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
            <Button className="mr-[10px]">Learn More</Button>
            <Button className="btn-shadow" variant="secondary">
              Schedule Demo
            </Button>
          </div>
          <div>
            <Image
              className="ml-auto"
              src="/bridge-gateway.png"
              alt=""
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="container py-20 relative isolate before:w-[36.25rem] before:absolute before:h-[36.25rem] before:bg-[#B7D2FF33] before:rounded-full before:top-[10rem] before:-left-[230px] before:blur-[150px] before:-z-10">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[80%] mb-4">
              Risk Management & Reporting
            </h3>
            <p className="text-body opacity-50 font-medium max-w-[55%]">
              Historic and real-time trade data available at your fingertips.
              Your Bourse mines, slices, and pre-calculates 89 data items to
              offer tailor-made reporting.
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
          <div>
            <Image
              className="ml-auto"
              src="/risk-management.png"
              alt=""
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="container py-20 relative isolate">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h3 className="text-h3 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium max-w-[70%] mb-4">
              Fully functional FIX API Server
            </h3>
            <p className="text-body opacity-50 font-medium max-w-[56%]">
              Fully functional FIX API Server with Margin Accounts in MT4/MT5.
              Issue FIX Sessions and apply all configurations in real time (no
              restart needed), including symbols, mark-ups, IP whitelisting
              etc...
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
          <div>
            <Image
              className="ml-auto"
              src="/api-server.svg"
              alt=""
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
