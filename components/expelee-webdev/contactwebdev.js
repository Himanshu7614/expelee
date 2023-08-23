import React from "react";
import PrimaryButton from '../PrimaryButton'

function Contactwebdev() {
  return (
    <>
      <div className="px-[5rem]">
      <div className="mt-[10rem]  mx-auto w-[90%] lg:w-[50%]">
				<h4 className=" bold gradient text-center text-[6rem] lg:text-[2rem]">
        Get in touch !
				</h4>
				<h2 className="bold text-[9rem] text-center lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
					Contact Us
				</h2>
				<p className="regular text-center text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
        Start your growth journey today! fill out the form below to start the conversation. We will send you an email reply within 3 business working days and a solution to your all queries if have any.
				</p>
			</div>
        <div className=" mt-[15rem] lg:mt-[10rem] flex lg:flex-row flex-col lg:gap-1 gap-14 ">
            <div className="flex flex-col justify-center gap-2 ">
              <h2 className="bold text-[8rem] lg:text-[9rem] mt-[1rem] lg:mt-[0rem] text-black leading-tight">
              Wed love <br/> to  hear from you
              </h2>
              <p className=' justify-start text-[6rem] lg:text-[1.9rem] w-[80%]' >
                  We get as excited about your project as you do, lets chat about how we can help you and make your Ideas into Interactive Web Realities.
                </p>
            </div>
            <div className="flex flex-col items-start gap-12">
            <div className="flex flex-col items-start lg:gap-2 gap-4">
                <h4 className=' justify-start text-[5rem] lg:text-[1.8rem] uppercase  bold'>
                    create 
                </h4>
                <div className="flex lg:gap-4 gap-12 ">
                <h5 className=" bold text-[3rem] lg:text-[1.4rem] uppercase bg-gray-300 text-black lg:px-12 py-6 lg:py-5 px-14 rounded-full text-center lg:mb-7 ">
                Standard{" "}
              </h5>
               <h5 className=" bold text-[3rem] lg:text-[1.4rem] uppercase bg-gray-300 text-black lg:px-12 py-6 lg:py-5 px-14 rounded-full text-center lg:mb-7 ">
                Standard{" "}
              </h5>
               <h5 className=" bold text-[3rem] lg:text-[1.4rem] uppercase bg-gray-300 text-black lg:px-12 py-6 lg:py-5 px-14 rounded-full text-center lg:mb-7 ">
                Standard{" "}
              </h5>
                </div>
            </div>
            <div className="flex flex-col items-start lg:gap-2 gap-4">
                <h4 className=' justify-start text-[5rem] lg:text-[1.8rem] uppercase  bold'>
                    create 
                </h4>
                <div className="flex lg:gap-4 gap-12 ">
                 <h5 className=" bold text-[3rem] lg:text-[1.4rem] uppercase bg-gray-300 text-black lg:px-12 py-6 lg:py-5 px-14 rounded-full text-center lg:mb-7 ">
                Standard{" "}
              </h5>
               <h5 className=" bold text-[3rem] lg:text-[1.4rem] uppercase bg-gray-300 text-black lg:px-12 py-6 lg:py-5 px-14 rounded-full text-center lg:mb-7 ">
                Standard{" "}
              </h5>
               <h5 className=" bold text-[3rem] lg:text-[1.4rem] uppercase bg-gray-300 text-black lg:px-12 py-6 lg:py-5 px-14 rounded-full text-center lg:mb-7 ">
                Standard{" "}
              </h5>
                </div>
            </div>
            <div className="flex flex-col lg:gap-12 gap-20 mt-[5rem] lg:mt-0">                
                <div className="flex gap-4 ">
                <input className="bg-transparent w-full text-gray-700 lg:text-[2rem] text-[4rem] mr-3 py-4 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" />
                <input className="bg-transparent w-full text-gray-700 lg:text-[2rem] text-[4rem] mr-3 py-4 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" />
                </div>
                <textarea className="bg-transparent text-gray-700 lg:text-[2rem] text-[4rem] mr-3 py-4 px-2 leading-tight focus:outline-none lg:w-[98.4%] mb-[3rem]" type="text" placeholder="Description" />
                <PrimaryButton
							text="Submit"
							className="mt-[5rem] bg-black "
						/>
            </div>

            </div>
           
        </div>
      </div>
    </>
  );
}

export default Contactwebdev;
