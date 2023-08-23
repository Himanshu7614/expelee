import React from "react";
import PrimaryButton from "../PrimaryButton";
import { motion } from "framer-motion";

function Business() {
  return (
    <div className="px-[5rem]">
      <div className=" mt-[15rem] lg:mt-[10rem] flex lg:flex-row flex-col lg:gap-1 gap-[10rem] ">
        <div className="flex-1 flex justify-start lg:items-center gap-2 lg:pt-12">
          <div className="flex flex-col gap-2">
            <h4 className="flex  bold  justify-center lg:justify-start text-[6rem] lg:text-[2rem]">
              WORK WITH US
            </h4>
            <h2 className="bold text-[8rem] lg:text-[5rem] mt-[1rem] lg:mt-[0rem]">
              Why do you need web development services?
            </h2>
            <div className="flex flex-col gap-9">
              <p className="lg:w-[80%] justify-start text-[5rem] lg:text-[2rem]">
                1. In todays fast-paced Digital world, a web development
                service is not just an option but a necessity. A well-crafted
                website acts as your digital storefront, offering 24/7
                accessibility to potential customers.
              </p>
              <p className="lg:w-[80%] justify-start text-[5rem] lg:text-[2rem]">
                2. In todays fast-paced Digital world, a web development
                service is not just an option but a necessity. A well-crafted
                website acts as your digital storefront, offering 24/7
                accessibility to potential customers.
              </p>
              <p className="lg:w-[80%] justify-start text-[5rem] lg:text-[2rem]">
                3. In todays fast-paced Digital world, a web development
                service is not just an option but a necessity. A well-crafted
                website acts as your digital storefront, offering 24/7
                accessibility to potential customers.
              </p>
            </div>
            <PrimaryButton text={"Connect"} classes="lg:mt-8 mt-14 w-[50%]" />
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
          className="flex justify-center"
        >
          <div className="grid grid-cols-2 gap-12 lg:gap-8 h-[40rem]">
            <div className="bg-white lg:h-[20rem] lg:w-[20rem] h-[55rem] w-[55rem] shadow-2xl rounded-2xl justify-center items-center hover:scale-110 duration-300 p-20 lg:p-0">
              <div className="flex flex-col justify-center items-center gap-0 lg:my-[4rem] my-[6rem]">
                <img
                  src="/static/d.png"
                  className="lg:w-32 w-[21rem]"
                  alt="Picture of the author"
                />
                <h2 className="bold text-[6rem] lg:text-[2rem] mt-[1rem] lg:mt-[0rem] uppercase">
                  1. Strategy
                </h2>
              </div>
            </div>
            <div className="bg-white lg:h-[20rem] lg:w-[20rem] h-[55rem] w-[55rem] shadow-2xl rounded-2xl justify-center items-center hover:scale-110 duration-300 p-20 lg:p-0 mt-[2rem]">
              <div className="flex flex-col justify-center items-center gap-0 lg:my-[4rem] my-[6rem]">
                <img
                  src="/static/start.png"
                  className="lg:w-32 w-[21rem]"
                  alt="Picture of the author"
                />
                <h2 className="bold text-[6rem] lg:text-[2rem] mt-[1rem] lg:mt-[0rem] uppercase">
                  1. Strategy
                </h2>
              </div>
            </div>
            <div className="bg-white lg:h-[20rem] lg:w-[20rem] h-[55rem] w-[55rem] shadow-2xl rounded-2xl justify-center items-center hover:scale-110 duration-300 p-20 lg:p-0">
              <div className="flex flex-col justify-center items-center gap-0 lg:my-[4rem] my-[6rem]">
                <img
                  src="/static/web.png"
                  className="lg:w-32 w-[21rem]"
                  alt="Picture of the author"
                />
                <h2 className="bold text-[6rem] lg:text-[2rem] mt-[1rem] lg:mt-[0rem] uppercase">
                  1. Strategy
                </h2>
              </div>
            </div>
            <div className="bg-white lg:h-[20rem] lg:w-[20rem] h-[55rem] w-[55rem] shadow-2xl rounded-2xl justify-center items-center hover:scale-110 duration-300 p-20 lg:p-0 mt-[2rem]">
              <div className="flex flex-col justify-center items-center gap-0 lg:my-[4rem] my-[6rem]">
                <img
                  src="/static/strategy.png"
                  className="lg:w-32 w-[21rem]"
                  alt="Picture of the author"
                />
                <h2 className="bold text-[6rem] lg:text-[2rem] mt-[1rem] lg:mt-[0rem] uppercase">
                  1. Strategy
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Business;
