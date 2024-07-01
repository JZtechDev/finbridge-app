import Image from "next/image";

const Experience = () => {
  return (
    <section className=" py-20 overflow-x-hidden relative isolate before:w-[36.25rem] before:absolute before:h-[36.25rem] before:bg-[#B7D2FF33] before:rounded-full before:top-40 before:-left-[100px] before:blur-[100px] before:-z-10">
      <div className="container">
        <h2 className="text-h2 text-center text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium mb-9">
          Bespoke Experience
        </h2>
        <Image
          src="/dashboard.png"
          alt=""
          width="1100"
          height="660"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Experience;
