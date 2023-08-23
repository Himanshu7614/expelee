import Link from "next/link"
import Brands from "../components/Brands"
import PrimaryButton from "../components/PrimaryButton"
import { motion } from 'framer-motion'

const ExpeNft = () => {
    return (
        <div>
            <div className=' flex lg:flex-row flex-col'>
                <div className='lg:pt-[15rem] pt-[20rem] px-[8rem] lg:px-0 lg:w-[50%] '>
                    <h4 className=" bold gradient justify-center lg:justify-start text-[6rem] lg:text-[2rem]">Expe Nft</h4>
                    <h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                        Nft Development
                    </h2>
                    <p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                        The world of digital art and collectibles is currently awash in NFTs. Huge sales to a new crypto-audience are changing the lives of digital artists. As they recognize a fresh opportunity to communicate with audiences, celebrities are now jumping in. The use of NFTs is not limited to digital art, though. Actually, they can be used to symbolize ownership of any special asset, such as a deed for a product in the actual or digital world.
                    </p>
                    <div className="mt-[3.6rem]">
                        <Link href={'https://t.me/Ritz_Expelee'}>
                            <PrimaryButton text={'Contact Us'} />
                        </Link>
                    </div>

                </div>
                <img className='lg:w-[50rem]  my-[10rem] lg:ml-[15rem] lg:px-0 px-[5rem]' src="/static/nft/nft2.png" />
            </div>
            <div className="">
                <div className="flex flex-col lg:flex-row-reverse px-[7rem] lg:px-[0rem] gap-[3rem]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="order-1">
                        <img
                            src={'/static/nft/whatisnft.png'}
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
                            <h4 className="flex bold gradient lg:justify-start text-[6rem] lg:text-[2rem]">Know More</h4>

                            <h2 className="bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
                                What is NFT ?
                            </h2>
                            <p className="regular text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                NFTs are tokens that can be used to signify ownership of certain goods. We can tokenize items like works of art, valuables, and even real estate thanks to them. They are protected by the Ethereum blockchain and can only have one legitimate owner at a time; nobody can change the ownership record or create a new NFT by copying and pasting an existing one.
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
                        className="order-2">
                        <img
                            src={'/static/nft/nft1.png'}
                            alt="project1"
                            className='lg:w-[40rem] lg:my-[2rem] my-[10rem] lg:px-0 px-[5rem]'
                        />
                    </motion.div>
                    <div className="flex flex-1 gap-[3rem] lg:gap-[2rem]">
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
                                Our Ground-Breaking Approach to NFT Development
                            </h2>
                            <p className="regular text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
                                Expelee development teams use agile and scrum development processes, which are guaranteed to provide the desired results in a timely manner and offer our clients cheap services, to acquire the outcomes you want and that we want to give.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 gap-[3rem] px-[5rem] lg:px-[0rem] lg:w-[50%] lg:gap-[2rem] mt-[15rem] lg:mt-[10rem]  self-center">
                <div className='flex'>
                    <img
                        className="rounded-[100%] w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
                        src={'/static/smartContract/token.png'}
                        alt="caseStudy1"
                    />
                </div>
                <div className='flex-1 '>
                    <h4 className="flex bold gradient lg:justify-start text-[6rem] lg:text-[2rem]">Our Process</h4>

                    <h2 className="lg:leading-[4rem] bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
                        Steps for our NFT development process
                    </h2>
                </div>
            </div>
            <div className="ml-[5rem] lg:ml-0 mt-[11rem] px-[9rem] lg:mt-[10rem] grid lg:grid-cols-2 gap-[3rem] gap-x-[4rem]">
                {nftProcessData?.map((item, index) => (
                    <div key={index} className="flex gap-[1rem]">
                        <div>
                            <p className="bold text-[6rem] lg:text-[2rem]">{index + 1}.</p>
                        </div>
                        <div className="pr-[5rem]">
                            <h4 className="bold  text-[6rem] lg:text-[2rem]">{item.title}</h4>
                            <p className="regular  text-[6rem] lg:text-[1.5rem]">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" mt-[10rem] flex justify-center">
                <PrimaryButton text={'Contact us'} />
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

export default ExpeNft