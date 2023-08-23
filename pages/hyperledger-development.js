import PrimaryButton from "../components/PrimaryButton"
import {motion} from 'framer-motion'

const HyperledgerDevelopment = () => {
    return (
        <div>
          <div className='bg-hero1 lg:mt-[-5rem]'>
        <div className='lg:pt-[15rem] pt-[20rem] px-[8rem] lg:px-0 lg:w-[50%] '>
                <h4 className=" bold gradient justify-center lg:justify-start text-[5rem] lg:text-[2rem]">Hyperledger Development</h4>
                <h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                    Hyperledger Blockchain Development Services
                </h2>
                <p className="regular text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                Develop and deploy cross-industry Hyperledger blockchain applications with the expert development and orchestration services
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
                        Hyperledger Chain code Development (Smart Contracts)
                        </h2>
                        <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">
                        Currently we are working on and helping clients with the following Hyperledger Chain code Development (Smart Contracts)
                        </p>
                        <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">- Blockchain smart contract-powered secure payment processing solutions</p>
                        <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">- Supply chain management solutions for industries with tracking and traceability</p>
                        <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">- Automated invoice reconciliation, clain settlement, and more processes</p>
                        <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">- Secure and efficient asset/ownership transfer tracking and management</p>
                        <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">- Business solutions for verifiable digital identities, certificates, and more</p>

                    </div>

                </div>
            </div>
            {/* <div className="flex flex-col lg:flex-row px-[7rem] lg:px-[0rem] gap-[3rem] mt-[5rem]">
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
                        src={'/static/token.png'}
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
                        <h4 className="flex bold gradient lg:justify-start text-[5rem] lg:text-[2rem]">Our Process</h4>

                        <h2 className="bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
                        Our Ground-Breaking Approach to NFT Development
                        </h2>
                        <p className="regular text-left text-[4.5rem] lg:text-[1.8rem] text-[#5C5C5C]">
                        Expelee development teams use agile and scrum development processes, which are guaranteed to provide the desired results in a timely manner and offer our clients cheap services, to acquire the outcomes you want and that we want to give.
                        </p>
                    </div>
                </div>
            </div> */}
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
          Hyperledger dApp (Decentralized Application) Development
          </h2>
        </div>
      </div>
      <div className="ml-[5rem] lg:ml-0 mt-[11rem] px-[9rem] lg:mt-[10rem] grid lg:grid-cols-2 gap-[3rem] gap-x-[4rem]">
        {nftProcessData?.map((item, index) => (
            <div key={index} className="flex gap-[1rem]">
                <div>
                    <p className="bold text-[5rem] lg:text-[2rem]">{index+1}.</p>
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
        title: '- PoC (Proof-of-Concept) and MVP (Minimum Viable Product) development',
        description: 'Together, we discuss your needs, your business, and potential growth areas (albeit, with a cup of coffee). Here, we determine how we can improve your company`s value.'
    },
    {
        title: '- Integration of custom business logic for complex use cases and concepts',
        description: 'We choose the tools and technology needed to construct your solution at this point. To create high-fidelity prototypes of the final product, which are essential to get a real-life-like experience without coding, our designers unleash their creative energies.'
    },
    {
        title: '- Scalable, intelligent decentralized exchange platform development',
        description: 'Here, our programmers get to work and begin writing the answer while also developing a methodical architecture on which it will function. To ensure your solution runs continuously, they develop it using the best technology available and build an integrated network of solutions.'
    },
    {
        title: '- Chaincode (smart contract) development for dApps and enterprises',
        description: 'The solution undergoes testing after the development process is over, followed by deployment on the required platforms and devices. We also take care of the requirements particular to the industry, platform-specific details, and device-specific rules while accomplishing this.'
    },
    {
        title: '- dApp (decentralized applications) migration and enhancements'
    }
]

export default HyperledgerDevelopment