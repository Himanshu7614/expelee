import Link from "next/link";
import Brands from "../components/Brands"
import InfoText from "../components/InfoText"
import PrimaryButton from "../components/PrimaryButton"
import { motion } from 'framer-motion'
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css

const ExpeDiligence = () => {
    return (
        <div>
            <div  className=' flex lg:flex-row flex-col'>
                <div className='lg:pt-[15rem] pt-[20rem] px-[8rem] lg:px-0 lg:w-[50%] '>
                    <h4 className=" bold gradient justify-center lg:justify-start text-[6rem] lg:text-[2rem]">Exp KYC</h4>
                    <h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                        KYC & Certification
                    </h2>
                    <p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                        We give project owners and teams access to our Anonymous KYC Service. The names and details of the project owners are disclosed to us. Except in cases of fraud or sleight of hand, this information is not given to anyone or any institution.
                    </p>
                    <p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                        We put a KYC Verification post on our website once an individual has successfully completed our KYC process.
                    </p>
                    <p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                        The project owners and teams maintain their anonymity and inspire investor confidence in this way.
                    </p>
                    <div className="mt-[3.6rem]">
                    <Link href={'https://t.me/Ritz_Expelee'}>
                    <PrimaryButton text={'Contact Us'} />
                    </Link>
                    </div>
                </div>
                <img className='lg:w-[50rem]  my-[10rem] lg:ml-[15rem] lg:px-0 px-[5rem]' src="/static/kyc/kyc1.png" />
            </div>
        
            <div className="mt-[1rem] lg:mt-[0rem]">
                <div className="flex flex-col-reverse lg:flex-row-reverse px-[7rem] lg:px-[0rem] gap-[3rem] mt-[10rem]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="">
                        <img
                            src={'/static/kyc/kyc2.png'}
                            alt="project1"
                            className='lg:w-[40rem] lg:my-[2rem] my-[10rem] lg:px-0 px-[5rem]'
                        />
                    </motion.div>
                    <div className="flex flex-1 gap-[3rem] lg:gap-[2rem]  self-center">
                        <div className='flex'>
                            <img
                                className="rounded-[100%] w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
                                src={'/static/smartContract/token.png'}
                                alt="caseStudy1"
                            />
                        </div>
                        <div className='flex-1'>
                            <h4 className="flex bold gradient lg:justify-start text-[6rem] lg:text-[2rem]">Know More</h4>

                            <h2 className="bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
                                What is KYC in Crypto ?
                            </h2>
                            <p className="regular text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                In cryptosphere, privacy holds a special place. The most significant illustration of this is Satoshi. For a variety of reasons, some people may not want to expose their identity.
                            </p>
                            <p className="regular mt-[2rem] text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                Regrettably, we frequently encounter scam-rug pulls in new ventures in the cryptocurrency realm. This is bad news for the cryptocurrency industry as a whole and for all investors.
                            </p>
                            <p className="regular mt-[2rem] text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                The KYC process is used to establish confidence with investors as well as to protect the identity of the project owners.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row px-[7rem] lg:px-[0rem] gap-[3rem] mt-[5rem]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="">
                        <img
                            src={'/static/kyc/kyc3.png'}
                            alt="project1"
                            className='lg:w-[40rem] lg:my-[2rem] my-[10rem] lg:px-0 px-[5rem]'
                        />
                    </motion.div>
                    <div className="flex flex-1 gap-[3rem] lg:gap-[2rem]  self-center">
                        <div className='flex'>
                            <img
                                className="rounded-[100%] w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
                                src={'/static/smartContract/token.png'}
                                alt="caseStudy1"
                            />
                        </div>
                        <div className='flex-1'>
                            <h4 className="flex bold gradient lg:justify-start text-[6rem] lg:text-[2rem]">Our Process</h4>

                            <h2 className="bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
                                How does our KYC work?
                            </h2>
                            <p className="regular text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                Our KYC service entails the following steps:
                            </p>
                            <ul className="mt-[2rem] list-disc regular text-[6rem] lg:text-[1.6rem] pl-[2rem]">
                                <li>All core team members have their identities verified using a passport, id card, or drivers license.</li>
                                <li>The founder must confirm his address over the phone and with further documentation.</li>
                                <li>The entire project is also examined against a list of internal risks.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row mt-[6.5rem] lg:mt-[5.9rem] gap-[7.3rem] px-[7rem]">
                {/* <img className='ml-[5rem]' src="/static/kycbg.png" alt="" />
                <div className='w-[90%] lg:w-[70%] my-[10rem] mx-auto'> */}
				<Player
					autoPlay
					src="/static/kycProcess.mp4"
				/>
			{/* </div> */}
            </div>
            <InfoText />
        </div>
    )
}

export default ExpeDiligence