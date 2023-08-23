import { useRouter } from 'next/router'
import React from 'react'
import Brands from '../components/Brands'

const CaseStudiesDetail = () => {
    const router = useRouter()
    return (
        <div className="mt-[15rem] lg:mt-[10rem] lg:px-0 px-[10rem]">
            <div className="mt-[25rem] lg:mt-[9rem]  mx-auto w-[90%] lg:w-[90%] ">
                
                <h4 className="bold gradient text-center  text-[5rem] lg:text-[2rem]">
                    Case Study
                </h4>
                <button
                className="text-[4.5rem] lg:text-[1.8rem] medium mb-[8rem] lg:mb-[1rem] gradient"
                onClick={() => router.back()}
            >
                &larr; Go Back
            </button>
                <h2 className="bold text-[9rem] text-center lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                    Welcome hictic – a revolution in the world of traditional advertisement
                </h2>
                <img src="/static/caseStudyDetail.png" className='mt-[2rem] w-[60rem] h-[60rem] mx-auto' />
            </div>
            <div className="flex flex-1 gap-[3rem] px-[5rem] lg:px-[0rem] lg:w-[50%] lg:gap-[2rem] mt-[15rem] lg:mt-[10rem]  self-center">
        <div className='flex'>
          <img
            className="rounded-[100%] w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
            src={'/static/eth.png'}
            alt="caseStudy1"
          />
        </div>
        <div className='flex-1 '>
          <h4 className="flex bold gradient lg:justify-start text-[6rem] lg:text-[2rem]">About</h4>

          <h2 className="lg:leading-[4rem] bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
          Project Highlights
          </h2>
        </div>
      </div>
      <div className="ml-[5rem] lg:ml-0 mt-[11rem] px-[9rem] lg:mt-[10rem] grid lg:grid-cols-2 gap-[3rem] gap-x-[4rem]">
        {nftProcessData?.map((item, index) => (
            <div key={index} className="flex gap-[1rem]">
                <div>
                    <p className="bold text-[6rem] lg:text-[2rem]">{index+1}.</p>
                </div>
                <div className="pr-[5rem]">
                    <h4 className="bold  text-[6rem] lg:text-[2rem]">{item.title}</h4>
                    <p className="regular  text-[6rem] lg:text-[1.5rem]">{item.description}</p>
                </div>
            </div>
        ))}
      </div>
      {/* <Brands /> */}
        </div>
    )
}

const nftProcessData = [
    {
        title: 'Conceptualization and Advice',
        description: 'Together, we discuss your needs, your business, and potential growth areas (albeit, with a cup of coffee). Here, we determine how we can improve your company`s value.'
    },
    {
        title: ' Making the Framework',
        description: 'We choose the tools and technology needed to construct your solution at this point. To create high-fidelity prototypes of the final product, which are essential to get a real-life-like experience without coding, our designers unleash their creative energies.'
    },
    {
        title: 'Design and Construction',
        description: 'Here, our programmers get to work and begin writing the answer while also developing a methodical architecture on which it will function. To ensure your solution runs continuously, they develop it using the best technology available and build an integrated network of solutions.'
    },
    {
        title: 'Deployment',
        description: 'The solution undergoes testing after the development process is over, followed by deployment on the required platforms and devices. We also take care of the requirements particular to the industry, platform-specific details, and device-specific rules while accomplishing this.'
    }
]


export default CaseStudiesDetail