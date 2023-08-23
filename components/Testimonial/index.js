import { Fragment, useEffect, useState } from 'react'
import TestimonialDetail from './TestimonialDetail'
import AliceCarousel from 'react-alice-carousel'
import Link from 'next/link'

const Testimonial = () => {
	const [items, setItems] = useState(null)

	useEffect(() => {
		const items = testimonials?.map((item, index) => {
			const { name, image, description } = item

			return (
				<TestimonialDetail
					name={name}
					image={image}
					key={index}
					description={description}
				/>
			)
		})
		setItems(items)
	}, [])

	const ArrowNext = () => (
		<div className="hidden lg:block absolute  lg:right-[-5.9rem] top-[15rem]">
			<img
				className="w-[10rem] lg:w-[35px] lg:h-[35px]"
				src={'/static/rightArrow.svg'}
				alt="rightArrow"
			/>
		</div>
	)

	const ArrowPrev = () => <Fragment></Fragment>

	const responsive = {
		393: {
			items: 1,
		},
		667: {
			items: 1,
		},
		1350: {
			items: 2,
		},
	}

	return (
		<div className=" w-[100%] lg:mx-auto mx-[1rem] mt-[15rem] lg:mt-[19.5rem]">
			<div className="mb-[8rem]">
				<h4 className="flex justify-center bold text-[5rem] lg:text-[2rem] gradient mb-[-30px] lg:mb-[-10px]">
					TESTIMONIALS
				</h4>
				<h2 className=" flex justify-center bold text-[9rem] lg:text-[5rem]">
					What others are saying
				</h2>
				<Link href="/testimonials">
					<div className="regular pr-[8rem] lg:pr-0 my-[10rem] lg:my-0 text-[5rem] lg:text-[1.5rem] flex justify-center lg:justify-end mt-[5rem] underline link">
						<p>View All</p>
					</div>
				</Link>
			</div>
			{items?.length > 0 && (
				<AliceCarousel
					mouseTracking
					infinite
					autoPlayInterval={1500}
					animationDuration={1500}
					disableDotsControls
					responsive={responsive}
					items={items}
					autoPlay={true}
					keyboardNavigation={true}
					renderNextButton={ArrowNext}
					renderPrevButton={ArrowPrev}
				/>
			)}
		</div>
	)
}
export default Testimonial

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
