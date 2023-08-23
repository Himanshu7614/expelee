import React, { Fragment } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import Brands from '../components/Brands';
import Link from 'next/link';

const Testimonials = () => {
    return (
        <Fragment>
            <div className='mt-[20rem] lg:mt-[10rem]  mx-auto w-[90%] lg:w-[50%]'>
                <h4 className=" bold gradient text-center  text-[6rem] lg:text-[2rem]">Testimonials</h4>
                <h2 className="bold text-[9rem] text-center lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                    What others are saying
                </h2>
                <p className="regular text-center text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                    On the way to develop our Blockchain Ecosystem, this is the roadmap we will be following in our journey.
                </p>
            </div>
            <div className='flex mt-[2rem] justify-center'>
            <Link href={'https://t.me/Ritz_Expelee'}>
                <PrimaryButton text={'Get Started'} />
            </Link>
            </div>
            <div className='mt-[8rem] grid px-[8rem] lg:px-[0rem] grid-cols-1 lg:grid-cols-3 gap-2'>
            {testimonials?.map((item, index) => {
                const {name, description, image} = item;
                return (
                    
                    <TestimonialDetail 
                        key={index}
                        name={name}
                        description={description}
                        image={image}
                    />
                )
            })}
            </div>
            {/* <Brands /> */}
        </Fragment>

    )
}

const TestimonialDetail = ({name, description, image}) => {
    return (
        <div className="justify-center ml-[2.8rem] mb-[8rem] lg:mb-[3rem]  pr-[2rem]">
        <img
            src="/static/icon-testimonials.svg"
            className="w-[4rem] h-[3.5rem] lg:w-[4rem] lg:h-[2rem]"
            alt=""
        />
        <p className=" text-[6rem] lg:text-[1.6rem] regular my-[2.8rem]">
        {description}
        </p>
        <div className='flex items-center gap-[3rem] lg:gap-[1rem]'>
        <div>
          <img className='w-[15rem] rounded-full lg:w-[4rem]' src={`${image}`} alt="" />
        </div>
        <div className=''>
          <p className='medium text-[6rem] lg:text-[1.5rem]'>{name}</p>
        </div>
      </div>
    </div>
    )
}

const testimonials = [
	{
		name: ' Sarah Johnson, CEO at InnovateTech',
		image: '/static/testi/Sarah.jpg',
		description: `"Expelee's vetting service ensured the authenticity of our users. Their transparency, affordability, and proactive approach made them our go-to partner for blockchain project vetting."`,
	},
	{
		name: 'Michael Davis, CFO at Stellar Solutions',
		image: '/static/testi/Michael.jpg',
		description: `"Expelee's audit design service provided us with a thorough analysis of our smart contracts. Their transparency, affordable pricing, and proactive suggestions enhanced the security of our blockchain project."`
	},
    {
		name: "Emily Thompson, Marketing Manager at ArtCollect",
		image: '/static/testi/Emily.jpg',
		description: `"Expelee's NFT creation service helped us establish a trusted marketplace. Their transparent process, affordable pricing, and proactive support ensured a smooth and successful launch of our NFT project."`
	},
	{
		name: "David Wilson, CTO at TechWorld",
		image: '/static/testi/David.jpg',
		description: `"Expelee's website development service delivered a decentralized and secure platform. Their transparent approach, affordable pricing, and proactive implementation of blockchain technologies exceeded our expectations."`
	},
    {
		name: 'Jennifer Roberts, Project Manager at GameMakers',
		image: '/static/testi/jeneffer.jpg',
		description: `"Expelee's DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development."`
	},
	{
		name: "John Brown, Operations Manager at CryptoTrade",
		image: '/static/testi/John.jpg',
		description: `"Expelee's DEX development service revolutionized our digital asset trading platform. Their transparent approach, affordable pricing, and proactive solutions enhanced security and efficiency in our decentralized exchange."`
	},
]

export default Testimonials