import React from "react";
import Brands from "../Brands";

function Clientwebdev() {
  return (
    <>
      <hr className="bg-gray-900 h-[1px] flex justify-center rounded-full w-[90%] lg:w-[100%]  mb-[5rem]" />

      <div className="px-[10rem]">
        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
        <h4 className="flex  bold  justify-center lg:justify-start text-[6rem] lg:text-[2rem]">
        Why choose us
				</h4>
          <h2 className="bold text-[8rem] lg:text-[5rem] uppercase mt-[1rem] lg:mt-[0rem] lg:w-[90%] text-center">
          Check our best clients & partners
          </h2>
          <p className="lg:w-[50%] justify-start text-[5rem] lg:text-[1.5rem] text-center">
          showcasing the transformative journey of our clients. From startups to established enterprises, our web development service has empowered them with custom solutions, enabling digital growth and success.
          </p>
        </div>
      </div>
      <Brands />
      <hr className="bg-gray-800 h-[1px] flex justify-center rounded-full w-[90%] lg:w-[100%]  mt-[5rem]" />

    </>
  );
}

export default Clientwebdev;
