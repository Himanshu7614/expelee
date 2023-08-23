import PrimaryButton from "../components/PrimaryButton"
import { motion } from 'framer-motion'

const BlockChainDevelopment = () => {
    return (
        <div>
            <div className='bg-hero1 lg:mt-[-5rem]'>
                <div className='lg:pt-[15rem] pt-[20rem] px-[8rem] lg:px-0 lg:w-[50%] '>
                    <h4 className=" bold gradient justify-center lg:justify-start text-[5rem] lg:text-[2rem]">Blockchain Development</h4>
                    <h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                        Blockchain Development Services
                    </h2>
                    <p className="regular text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                        Whether you need a prototype or a production-ready platform, our
                        engineering team’s deep experience in cryptocurrency, data
                        science, and serverless computing can help you leverage the
                        benefits of blockchain. We will evaluate potential blockchains for
                        your project, including Ethereum, Hyperledger, EOS, NEO and choose
                        the best fit, like when to use private permissioned blockchains
                        such as Quorum.
                    </p>
                    <div className="mt-[3.6rem]">
                        <PrimaryButton text={'Contact Us'} />
                    </div>

                </div>
            </div>
            <div className="mt-[1rem] lg:mt-[10]rem">
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
                            src={'/static/howitworks.png'}
                            alt="project1"
                        />
                    </motion.div>
                    <div className="flex flex-1 gap-[3rem] lg:gap-[2rem]  self-center">
                        <div className='flex'>
                            <img
                                className="rounded-[100%] w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
                                src={'/static/eth.png'}
                                alt="caseStudy1"
                            />
                        </div>
                        <div className='flex-1'>
                            <h4 className="flex bold gradient lg:justify-start text-[5rem] lg:text-[2rem]">Know More</h4>

                            <h2 className="bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
                                Our Services Include
                            </h2>

                            <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                - Blockchain deployment and development with web3, solidity,
                                cakeshop and truffle.
                            </p>
                            <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                - Smart contracts and custom dapp frameworks like Open Zeppelin.
                            </p>
                            <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                - Application and data science engineering using Python.
                            </p>
                            <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                - Enterprise native mobile apps with Swift and Objective-C.
                            </p>
                            <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                - Web platforms using Phoneix / Elixir and serverless
                                architecture.
                            </p>
                        </div>
                    </div>
                </div>
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
                    <h4 className="flex bold gradient lg:justify-start text-[5rem] lg:text-[2rem]">Our Process</h4>

                    <h2 className="lg:leading-[4rem] bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
                        Here are some of the blockchain areas we are currently working
                        on
                    </h2>
                </div>
            </div>
            <div className="ml-[5rem] lg:ml-0 mt-[11rem] px-[9rem] lg:mt-[10rem] grid lg:grid-cols-2 gap-[3rem] gap-x-[4rem]">
                {nftProcessData?.map((item, index) => (
                    <div key={index} className="flex gap-[1rem]">
                        <div>
                            <p className="bold text-[5rem] lg:text-[2rem]">{index + 1}.</p>
                        </div>
                        <div className="pr-[5rem]">
                            <h4 className="bold  text-[5rem] lg:text-[2rem]">{item.title}</h4>
                            {/* <p className="regular  text-[5rem] lg:text-[1.5rem]">{item.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>
            <div className=" mt-[10rem] flex justify-center">
                <PrimaryButton text={'Contact us'} />
            </div>
        </div>
    )
}

const nftProcessData = [
    {
        title: 'Blockchain infrastructure.'
    },
    {
        title: 'Blockchain and peer-to-peer transfers.'
    },
    {
        title: 'Blockchain and digital currencies.'
    },
    {
        title: 'Smart Contracts.'
    },
    {
        title: 'Innovation in blockchain'
    },
    {
        title: 'Privacy, Security and Identity in blockchain.'
    },
    {
        title: 'Blockchain and regulatory frameworks.'
    }
]

export default BlockChainDevelopment