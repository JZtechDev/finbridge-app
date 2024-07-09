"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const Experience = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-50% end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20deg", "0deg"]);
  const sppringedValue = useSpring(y, { stiffness: 1000, damping: 10 });
  2;

  return (
    <section className=" py-20 overflow-x-hidden relative isolate z-10 sm:before:w-[580px] before:w-[17.5rem] before:absolute sm:before:h-[36.25rem] before:h-[17.5rem] before:bg-[#B7D2FF33] before:rounded-full sm:before:top-40 before:top-8 before:-left-[100px] before:blur-[100px] before:-z-10">
      <div className="container bespoke_container">
        <h2 className="sm:text-h2 text-[32px] text-center text-transparent leading-tight bg-gradient-to-t from-[#B3B3B3] to-white bg-clip-text font-medium mb-9">
          Bespoke Experience
        </h2>
        <motion.img
          ref={targetRef}
          src="/dashboard.png"
          alt=""
          width="1100"
          height="660"
          className="w-full origin-top transition-all"
          style={{ rotateX: sppringedValue }}
        />
      </div>
    </section>
  );
};

export default Experience;
