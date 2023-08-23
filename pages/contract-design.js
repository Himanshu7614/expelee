import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { motion } from "framer-motion"
import TextLink from '../components/TextLink'
import Image from 'next/image'
import Brands from '../components/Brands'
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css
import Link from 'next/link'

const ContractDesign = () => {
    return (
        <div>
               <div className='lg:mt-[-5rem] flex lg:flex-row flex-col'>
                 <div className='lg:pt-[15rem] pt-[20rem] px-[8rem] lg:px-0 lg:w-[50%] '>
                    <h4 className=" bold gradient justify-center lg:justify-start text-[6rem] lg:text-[2rem]">Expelee Design</h4>
                    <h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                        Smart Contract Token Creation
                    </h2>
                    <p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                        A Strong, Simple, and Reliable Method for Creating and Managing Tokens
                    </p>
                    <p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                        Utilizing our features, create your own token smart contract while comprehending the underlying principles of token specifications and the significant variations across token types.
                    </p>
                    <p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                        Create and implement ERC20 and ERC721 token contracts. The Token Factory offers complete flexibility in setting up the functionalities of the tokens.
                    </p>
                    <div className="mt-[3.6rem]">
                    <Link href={'https://t.me/Ritz_Expelee'}>
						<PrimaryButton text={'Start a Project'} />
					</Link>
                    </div>

                </div>
				<img  className='lg:w-[50rem] lg:my-[15rem] my-[10rem] lg:ml-[15rem] lg:px-0 px-[5rem]' src={'/static/smartContract/tokenCreation.png'} />
            </div>
            <div className='w-[90%] lg:w-[70%] my-[10rem] mx-auto'>
				<Player
					autoPlay
					src="/static/smartContract.mp4"
				/>
			</div>
            <div className="mt-[15rem] lg:mt-[10rem">
                <div className="flex flex-col lg:flex-row-reverse px-[7rem] lg:px-[0rem] gap-[3rem] mt-[10rem]">
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
                            src={'/static/smartContract/process.png'}
                            alt="project1"
                            className='lg:w-[50rem] lg:my-[2rem] my-[10rem] lg:px-0 px-[5rem]'
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
                                How it works ?
                            </h2>
                            <p className="regular text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                Expelees adaptable, simple, and scalable architecture is brought to tokens by Token Factory.Expelees adaptable, simple, and scalable architecture is brought to tokens by Token Factory.
                            </p>
                            <p className="regular text-left text-[6rem] lg:text-[1.8rem] mt-[1rem] text-[#5C5C5C]">
                                Enterprise On the blockchain, tokens serve as a representation of physical or digital assets. Tokens, which can be characterized as either fungible or non-fungible, offer a means of conducting safe digital transactions without the need for middlemen and third-party trust organizations. Enterprises can use tokens to improve processes related to asset trading transactions and provide a reliable framework for asset tracking, settlement, and custody.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col lg:flex-row px-[7rem] lg:px-[0rem] gap-[3rem] mt-[5rem]">
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
                            src={'/static/smartContract/howItWorks.png'}
                            alt="project1"
                            className='lg:w-[50rem] lg:my-[2rem] my-[10rem] lg:px-0 px-[5rem]'
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
                                Token Development
                            </h2>
                            <p className="regular text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
                            Utilizing our service, create your own token smart contract while comprehending the underlying principles of token specifications and the significant variations across token types.
                                                            </p>
                                <p className="regular text-left text-[6rem] lg:text-[1.8rem] mt-[1rem] text-[#5C5C5C]">
                            Looking for customized and complex token types? Using the wonderful code building blocks in Expelee, you can also deploy ERC-compliant coins directly. Then use the REST API Gateway to deploy them or communicate with them. You can keep using Expelees additional token features, including Token Explorer and Token Swaps, as long as they extend the basic ERC20 and ERC721 standard interfaces.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            {/* <Brands /> */}
</div>
)
}

export default ContractDesign