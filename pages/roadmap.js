import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import InfoText from '../components/InfoText'

const RoadMap = () => {
    return (
        <div className='px-[9rem] lg:px-0'>
            <div className='mt-[20rem] lg:mt-[10rem]   mx-auto w-[90%] lg:w-[50%]'>
                <h4 className=" bold gradient text-center  text-[5rem] lg:text-[2rem]">Roadmap</h4>
                <h2 className="bold text-[9rem] text-center lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                    Know More About Us
                </h2>
                <p className="regular text-center text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                    On the way to develop our Blockchain Ecosystem, this is the roadmap we will be following in our journey.
                </p>
            </div>
            <div className='flex mt-[2rem] justify-center'>
                <PrimaryButton text={'Get Started'} />
            </div>
            <div className='px-[7rem] grow-0 mt-[8rem] flex'>
                <div className=''>
                    <div className='flex gap-[4rem] lg:gap-0' >
                        <div >
                            <img alt="" className='w-[10rem] lg:w-[10rem] lg:h-[10rem]' src="/static/1.svg" />
                        </div>
                        <div>
                            <div className='flex gap-[1rem] items-center'>
                                <h4 className='bold text-[6rem] lg:text-[3rem]'>One Year Plan</h4>
                                <img alt="" className='flex justify-center items-center w-[2rem] h-[2rem]' src={`/static/icon-navArrowDown.svg`} />
                            </div>
                            <p className='regular text-[6rem] lg:text-[2rem]'>1 Aug 2023</p>
                        </div>
                    </div>
                    <div>
                        <ul className="mt-[2rem] list-disc regular text-[6rem] lg:text-[1.6rem] pl-[8rem]">
                            <li>Open Platform for web 3.0 </li>
                            <li>Partnership with Cex and Dex LaunchPads.</li>
                            <li>Expand and grow with 1 Million Total engagements.</li>
                            <li>Offices in Multiple cities</li>
                        </ul>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <img alt="" src={'/static/1line.svg'} />
                </div>
            </div>
            <div className='lg:hidden flex justify-center'>
                    <img alt="" className='w-[10rem] justify-center my-[5rem]' src={'/static/mobile-line.svg'} />
                </div>
            <div className='px-[7rem] grow-0 mt-[8rem] flex'>
                <div className='hidden lg:block'>
                <img alt="" src={'/static/2line.svg'} />
                </div>
                <div className=''>
                    <div className='flex gap-[4rem] lg:gap-0' >
                        <div >
                            <img alt="" className='w-[10rem] lg:w-[10rem] lg:h-[10rem]' src="/static/2.svg" />
                        </div>
                        <div>
                            <div className='flex gap-[1rem] items-center'>
                                <h4 className='bold text-[6rem] lg:text-[3rem]'>One Year Plan</h4>
                                <img alt="" className='flex justify-center items-center w-[2rem] h-[2rem]' src={`/static/icon-navArrowDown.svg`} />
                            </div>
                            <p className='regular text-[6rem] lg:text-[2rem]'>1 Aug 2023</p>
                        </div>
                    </div>
                    <div>
                        <ul className="mt-[2rem] list-disc regular text-[6rem] lg:text-[1.6rem] pl-[8rem]">
                            <li>Open Platform for web 3.0 </li>
                            <li>Partnership with Cex and Dex LaunchPads.</li>
                            <li>Expand and grow with 1 Million Total engagements.</li>
                            <li>Offices in Multiple cities</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='lg:hidden flex justify-center'>
                    <img alt="" className='w-[10rem] justify-center my-[5rem]' src={'/static/mobile-line.svg'} />
                </div>
            <div className='px-[7rem] grow-0 mt-[8rem] flex'>
                <div className=''>
                    <div className='flex gap-[4rem] lg:gap-0' >
                        <div >
                            <img alt="" className='w-[10rem] lg:w-[10rem] lg:h-[10rem]' src="/static/3.svg" />
                        </div>
                        <div>
                            <div className='flex gap-[1rem] items-center'>
                                <h4 className='bold text-[6rem] lg:text-[3rem]'>One Year Plan</h4>
                                <img alt="" className='flex justify-center items-center w-[2rem] h-[2rem]' src={`/static/icon-navArrowDown.svg`} />
                            </div>
                            <p className='regular text-[6rem] lg:text-[2rem]'>1 Aug 2023</p>
                        </div>
                    </div>
                    <div>
                        <ul className="mt-[2rem] list-disc regular text-[6rem] lg:text-[1.6rem] pl-[8rem]">
                            <li>Open Platform for web 3.0 </li>
                            <li>Partnership with Cex and Dex LaunchPads.</li>
                            <li>Expand and grow with 1 Million Total engagements.</li>
                            <li>Offices in Multiple cities</li>
                        </ul>
                    </div>
                </div>
              
            </div>
            <InfoText />
        </div>
    )
}

export default RoadMap