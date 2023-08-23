import React from "react";

function Policywebdev() {
  return (
    <><div className=" px-[5rem] my-[5rem]">
     
      <div className="grid  grid-cols-1 lg:grid-cols-3 lg:gap-[5rem] gap-[10rem] justify-center my-12">
        <div className="grid-cols-2 lg:gap-8 gap-[8rem] ">
          <h2 className="lg:text-[1.6rem] text-[6rem] text-gray-70 bold uppercase">ACCEPTED PAYMENT METHOD</h2>
          <div className="flex items-center lg:gap-8 gap-[10rem]">
          <img src="/static/mastercard.svg" className="my-2 lg:w-20 w-[20rem]" alt="Picture of the author" />
          <img src="/static/paypal.svg" className="my-2 lg:w-36 w-[38rem]" alt="Picture of the author" />
          <img src="/static/visa-credit-card.svg" className="my-2 lg:w-24 w-[20rem]" alt="Picture of the author" />
          </div>
        </div>
       <div className="grid-cols-2">
          <div className="flex items-start lg:gap-5 gap-[8rem]">
            <img src="/static/cash.svg" className="my-2 lg:w-24 w-[20rem]" alt="Picture of the author" />
          <div className="flex flex-col gap-4">
          <h2 className="lg:text-[1.6rem] text-[6rem] text-gray-70 bold uppercase">MONEY BACK GUARANTEE</h2>
          <p className="lg:text-[1.4rem] text-[4rem]">Try Expelee Web services for 14 days and if youre not 100% satisfied, get your money back.</p>
          </div>
          </div>
        </div>
        <div className="grid-cols-2">
          <div className="flex items-start lg:gap-5 gap-[8rem]">
            <img src="/static/shield.svg" className="my-2 lg:w-32 w-[33rem]" alt="Picture of the author" />
          <div className="flex flex-col gap-4">
          <h2 className="lg:text-[1.6rem] text-[6rem] text-gray-70 bold uppercase">MONEY BACK GUARANTEE</h2>
          <p className="lg:text-[1.4rem] text-[4rem]">Try Expelee Web services for 14 days and if youre not 100% satisfied, get your money back.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
{
  /* */
}
export default Policywebdev;
