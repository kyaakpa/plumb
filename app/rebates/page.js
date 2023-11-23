"use client";
import { Code } from "@nextui-org/react";
import { motion } from "framer-motion";

const Rebates = () => {
  return (
    <>
      <h1 className="text-7xl font-bold p-8 text-neutral-800">Rebates</h1>
      <h4 className="text-2xl px-8 py-4">Contact us for more information</h4>
      <div className="flex flex-col font-medium tracking-tight">
        <motion.ul
          variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.4, delay: 0.1 }}
          animate="visible"
          className="text-3xl p-8 bg-gray-100"
        >
          <li>
            <Code className="text-3xl bg-green-600 text-white">$10 Off</Code>{" "}
            for First-Time Customers
          </li>
          <li>Mass Save Incentives Available</li>
        </motion.ul>
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: 400 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.4, delay: 0.15 }}
          animate="visible"
          className="text-3xl p-8 bg-blue-300"
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
          className="text-3xl p-8 bg-gray-100"
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
          className="text-3xl p-8 bg-blue-300"
        >
          $250 for boiler replacement
        </motion.h2>
      </div>
    </>
  );
};

export default Rebates;
