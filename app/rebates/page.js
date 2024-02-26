"use client";
import { Code } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";

const Rebates = () => {
  return (
    <div className="flex flex-col gap-6 " id="/">
      <div className="relative w-full h-full overflow-hidden">
        <div className="h-[100vh]">
          <Image
            src={`/front.webp`}
            alt="plumbing site"
            width={1920}
            height={1080}
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-40
"
        >
          <div className="flex justify- flex-col gap-1 md:gap-3 w-[300px] md:w-[600px] lg:w-[800px]">
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold md:pl-8 pt-8 text-gray-100">
              Rebates
            </h1>
            <h4 className="md:text-2xl md:pl-8 py-2 md:py-4 text-gray-100">
              Contact us for more information
            </h4>
            <div className="flex flex-col font-medium tracking-tight">
              <motion.ul
                variants={{
                  hidden: { opacity: 0, x: 300 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                transition={{ duration: 0.4, delay: 0.1 }}
                animate="visible"
                className="md:text-2xl lg:text-3xl p-6 bg-gray-50"
              >
                <li>Mass SAVE Incentives Available</li>
                <li>
                  <Code className=" md:text-2xl lg:text-3xl bg-green-100 text-green-600">
                    10% OFF
                  </Code>{" "}
                  for First-Time Customers
                </li>
              </motion.ul>
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: 400 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                transition={{ duration: 0.4, delay: 0.15 }}
                animate="visible"
                className="md:text-2xl lg:text-3xl p-6 bg-blue-300"
              >
                $250 for yearly membership
              </motion.h2>
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: 500 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                transition={{ duration: 0.4, delay: 0.2 }}
                animate="visible"
                className="md:text-2xl lg:text-3xl p-6 bg-gray-50"
              >
                $250 for a rebate towards heating systems or upgrading your home
                heating
              </motion.h2>
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: 600 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                transition={{ duration: 0.4, delay: 0.25 }}
                animate="visible"
                className="md:text-2xl lg:text-3xl p-6 bg-blue-300"
              >
                $250 for boiler replacement
              </motion.h2>
            </div>
            <p className="mt-4 md:mt-12 self-start text-gray-100 text-sm md:text-base">
              Yearly Maintenance Membership includes a fall meeting to check
              your heating system and ensure proper functionality.*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rebates;
