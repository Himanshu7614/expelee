import React from "react";
import PrimaryButton from "../PrimaryButton";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/Ai";
import LearnMore from "../TextLink";

import Link from "next/link";
function Webdevpricing() {
  return (
    <>
      <div className="px-[10px] flex flex-col items-center">
        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer mt-[10rem] ">
          <h4 className="flex  bold gradient justify-center lg:justify-start text-[6rem] lg:text-[2rem] uppercase">
            Plans Curated for your perfect business
          </h4>
          <h2 className="bold text-[8rem] lg:text-[4rem] uppercase mt-[1rem] lg:mt-[0rem] lg:w-[90%] text-center">
            Plans Curated for your perfect business
          </h2>
          <p className="lg:w-[70%] justify-start text-[5rem] lg:text-[1.5rem] text-center w-[80%]">
            Adipiscing elit, sed do eiusmod tempor incididunt labore dolore
            magna aliqua. Ut enim ad minim veniam,
          </p>
        </div>
        <div className=" mt-[10rem] lg:mt-[10rem] flex lg:flex-row flex-col px-[10rem] lg:px-0 lg:gap-1 gap-8 mx-18 lg:mx-28">
          <div className="flex-1 flex justify-start lg:items-center gap-2 lg:pt-4">
            <div className="flex flex-col gap-9">
              <h4 className="flex  bold gradient justify-start text-[6rem] lg:text-[2rem]">
                Who we work with ?
              </h4>
              <h2 className="bold text-[8rem] lg:text-[5rem] mt-[1rem] lg:mt-[0rem] lg:w-[90%] uppercase">
                Standard Plan
              </h2>
              <p className="lg:w-[80%] justify-start text-[5rem] lg:text-[2rem]">
                Whether you’re a startup looking for that extra kick or an
                established retailer in need of a fresh perspective, we are here
                to take your digital commerce to the next level.
              </p>
              <Link href={""}>
                <LearnMore text="Get started" fontSize="2" />
              </Link>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="flex items-center"
          >
            <img
              className="w-[122rem] lg:w-[50rem] mt-[10rem] lg:mt-0"
              src="/static/aboutImage.png"
              alt="About Image"
            />
          </motion.div>
        </div>
        <div className=" mt-[10rem] lg:mt-[10rem] flex lg:flex-row flex-col-reverse px-[10rem] lg:px-0 lg:gap-32 gap-8 mx-18 lg:mx-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="flex items-center"
          >
            <img
              className="w-[122rem] lg:w-[50rem] mt-[10rem] lg:mt-0"
              src="/static/aboutImage.png"
              alt="About Image"
            />
          </motion.div>

          <div className="flex-1 flex gap-2 lg:pt-4 lg:px-8">
            <div className="flex flex-col gap-9 justify-center items-end ">
              <h4 className="flex  bold gradient justify-start text-[6rem] lg:text-[2rem]">
              Simple pricing. Great value
              </h4>
              <h2 className="bold text-[8rem] lg:text-[5rem] mt-[1rem] lg:mt-[0rem] uppercase text-end">
              Simple pricing. Great value
              </h2>
              <p className="text-[5rem] lg:text-[2rem] text-end">
              Generate the best lead with Expelee and turn them into customers. Choose your plan ↓
              </p>
              <Link href={""}>
                <LearnMore text="Let’s talk" fontSize="2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer mt-[20rem] px-8 lg:px-4">
          <h4 className="flex  bold gradient justify-center lg:justify-start text-[6rem] lg:text-[2rem]">
            WORK WITH US
          </h4>
          <h2 className="bold text-[8rem] lg:text-[4rem] uppercase mt-[1rem] lg:mt-[0rem] lg:w-[90%] text-center">
            PRICE’S PACKAGE
          </h2>
          <p className="lg:w-[70%] justify-start text-[5rem] lg:text-[1.5rem] text-center w-[80%]">
            Adipiscing elit, sed do eiusmod tempor incididunt labore dolore
            magna aliqua. Ut enim ad minim veniam,
          </p>
        </div>
        <div className=" mt-[10rem] lg:mt-[10rem] flex lg:flex-row flex-col lg:justify-center px-[10rem] lg:px-0 lg:gap-32 gap-8 mx-18 lg:mx-28">
          <div className=" bg-white lg:p-7 p-24 rounded-2xl recordShadow lg:my-0 my-[10rem]">
            <div className=" bg-gray-200 rounded-2xl flex flex-col items-center justify-center gap-9 py-24 lg:py-12  ">
              <h3 className=" bold text-[4rem] lg:text-[2rem] uppercase bg-orange-400 text-white lg:px-16 py-3 px-8 rounded-full text-center">
                Standard{" "}
              </h3>
              <h2 className="bold text-[8rem] lg:text-[4rem] p-0">$ 100</h2>
              <p className="text-[6rem] lg:text-[1.5rem] w-[50%] text-center p-0">
              Great for small and medium teams looking to started instantly
              </p>
            </div>
            <ul className=" flex flex-col gap-20 lg:gap-6 lg:mt-4 mx-4 mt-9 lg:mb-20 mb-48">
              <li className="flex items-center py-2 mt-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  Google Analytics Integration
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  All Basic Services
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">Custom domain</p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  Basic chat support
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCloseCircle
                  className="text-red-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  Unlimited Requests
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCloseCircle
                  className="text-red-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  Free domain for 1 year
                </p>
              </li>
            </ul>
            <div className="flex justify-center mt-[17.9rem]">
              <h3 className=" bold text-[4rem] lg:text-[2rem] uppercase bg-black text-white lg:py-4 py-9 lg:px-8 rounded-full text-center mb-7 w-[70%] carsour-pointer">Get started
              </h3>
            </div>
          </div>
          <div className=" bg-white lg:p-7 p-24 rounded-2xl recordShadow lg:my-0 my-[10rem]">
            <div className=" bg-gray-200 rounded-2xl flex flex-col items-center justify-center gap-9 py-24 lg:py-24  ">
              <h3 className=" bold text-[4rem] lg:text-[2rem] uppercase bg-blue-500 text-white lg:px-16 py-3 px-8 rounded-full text-center lg:mb-7">
                CUSTOM{" "}
              </h3>
              <p className="text-[6rem] lg:text-[1.9rem] w-[80%] text-center p-0">
              Great for businesses looking for a custom plan
              </p>
            </div>
            <ul className=" flex flex-col gap-20 lg:gap-6 lg:mt-4 mx-4 mt-9 lg:mb-20 mb-48">
              <li className="flex items-center py-2 mt-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  Google Analytics Integration
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  All Basic Services
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">Custom domain</p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  Basic chat support
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  Unlimited Requests
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  Brute-force protection
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  Cancel Anytime
                </p>
              </li>
              <li className="flex items-center py-4">
                <AiOutlineCheckCircle
                  className="text-green-900 w-28 h-28 lg:w-auto lg:h-auto"
                  size="30"
                />
                <p className="text-[6rem] lg:text-[17px] ml-4">
                  eCommerce Features
                </p>
              </li>
            </ul>
            <div className="flex justify-center">
              <h3 className=" bold text-[4rem] lg:text-[2rem] uppercase bg-black text-white lg:py-4 py-9 lg:px-8 rounded-full text-center mb-7 w-[70%] carsour-pointer">
              Contact us
              </h3>
            </div>
          </div>
        </div>
        <div className="px-24 lg:px-4">
          <p className="flex justify-start text-[5rem] lg:text-[2rem] text-start w-[90%] lg:w-[100%] mt-[10rem]">
          Displayed price can be change please confirm before buying. Prices do not include applicable taxes, which are determined according to your billing address.The final price can be seen on the purchase page, before payment is completed.
          </p>
          <hr className="bg-black h-[2px] flex justify-center rounded-full w-[90%] lg:w-[100%] mt-[5rem]" />
        </div>
      </div>
    </>
  );
}

export default Webdevpricing;
