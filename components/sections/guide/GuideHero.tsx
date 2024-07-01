import { Button } from "@/components/ui/button";

const GuideHero = () => {
  return (
    <section className="py-52 relative isolate before:absolute before:w-[250rem] before:h-[250rem] before:-translate-x-1/2 before:left-1/2 before:bottom-28 before:bg-[#03070D] before:-z-10 before:rounded-full after:absolute after:w-[25rem] after:h-[25rem] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:bg-[#28E7C5] after:-z-20 after:blur-3xl after:opacity-30">
      <div className="container">
        <div className="max-w-[35%] m-auto flex flex-col gap-[25px]">
          <h4 className="text-h4 text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium text-center px-[30px]">
            Your Finbridge Platform User Guide
          </h4>
          <p className="text-body opacity-50 font-medium text-center">
            Multi-asset liquidity aggregation, order matching, risk management,
            client profiling, reporting, and business analytics
          </p>
          <div className="flex justify-center">
            <Button className="btn-shadow mr-[10px]" variant="secondary">
              Schedule Demo
            </Button>
            <Button className="">Premium LP</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideHero;
