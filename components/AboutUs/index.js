import Image from 'next/image'
import TextLink from '../TextLink'
import { motion } from 'framer-motion'
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'

const AboutUs = () => {
	return (
		<div className=" mt-[15rem] lg:mt-[10rem] flex lg:flex-row flex-col-reverse px-[10rem] lg:px-0 ">
			{/* <div className=" lg:flex-1 ml-[-170px] mt-[10rem]  lg:block">
				
			</div> */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 },
				}}
				className="flex items-center"
			>
				<img
					className="w-[120rem] lg:w-[80rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
					src="/static/about.png"
					alt="About Image"
				/>
			</motion.div>
			<div className="flex-1 ">
				<h4 className="flex  bold gradient justify-center lg:justify-start text-[6rem] lg:text-[2rem]">
					ABOUT US
				</h4>
				<h2 className="bold text-[9rem] lg:text-[4rem] mt-[1rem] lg:mt-[0rem]">
					What we provide ?
				</h2>
				<p className="regular text-[6rem] lg:text-[1.8rem] text-[#33373f] mb-[2.6rem] mt-[2rem]">
				We provide a wide range of blockchain services that cater to the specific needs of businesses and individuals. Our offerings include comprehensive solutions for Smart Contract audits and decentralized applications. Our team of highly experienced blockchain experts collaborates closely with you to gain a deep understanding of your unique requirements. We then deliver customized solutions that foster innovation and drive growth. 
				</p>
				<h3 className="medium text-[6.5rem] lg:text-[2.7rem] text-[#1f2937]">
					Expe dApp Creator
				</h3>
				<p className="regular text-[6rem] lg:text-[1.8rem] text-[#33373f] mb-[1.7rem]">
				Leverage blockchain`s benefits with our secure DApp creation services. From decentralized marketplaces to financial products, our experienced team helps businesses harness the power of reliable blockchain technology. Contact us now to bring your ideas to life and explore the possibilities.
				</p>
				<div className='group'>
				<Link href={'/expe-dapp-creator'}>
				<TextLink  fontSize="1.6" />
				</Link>
				</div>
				<h3 className="medium text-[6.5rem] lg:text-[2.7rem] text-[#1f2937] mt-[2.4rem]">
					Expe Contract Design
				</h3>
				<p className="regular text-[6rem] lg:text-[1.8rem] text-[#33373f] mt-[1.6rem] mb-[1.7rem]">
				Our experienced blockchain experts conduct thorough smart contract audits to ensure the integrity of your blockchain technology. Through code review, security analysis, and testing, we identify vulnerabilities, security risks, and performance issues, ensuring your contracts adhere to industry standards and best practices.
				</p>
				<div className='group'>
				<Link href={'/contract-design'}>
				<TextLink  fontSize="1.6" />
				</Link>
				</div>
				<div className="mt-[3.6rem]">
					<Link href="/team">
						<PrimaryButton text={'More About Us'} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
