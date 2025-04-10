import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden font-sans bg-transparent text-gray-200">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h2 className="text-[32px] sm:text-[40px] font-bold uppercase text-center tracking-widest mb-6 text-blue-400">
          Contact <span className="text-white">Me</span>
        </h2>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-12 flex flex-col gap-6 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-sm"
        >
          <input
            type="hidden"
            name="access_key"
            value="3b83b882-3ab8-49b1-93d3-165826788dc3"
          />

<label className="text-gray-300 font-medium font-[Orbitron] tracking-wide uppercase">
  Full Name
</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-white/5 border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-blue-400 transition font-bold"
          />

<label className="text-gray-300 font-medium font-[Orbitron] tracking-wide uppercase">
  Email Address
</label>          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="bg-white/5 border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-blue-400 transition font-bold"
          />

<label className="text-gray-300 font-medium font-[Orbitron] tracking-wide uppercase">
  Message
</label>
          <textarea
            name="message"
            placeholder="Type your message here..."
            rows="6"
            className="bg-white/5 border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-blue-400 transition resize-none font-bold"
          />

<button
  type="submit"
  className="bg-blue-600 hover:bg-blue-500 transition text-white px-6 py-3 rounded-md font-[Orbitron] tracking-widest text-sm uppercase w-fit mt-4"
>
  {loading ? "Sending..." : "Send Message"}
</button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
