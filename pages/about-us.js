import React from 'react'
import SubTeamCard from '../components/SubTeamCard'
import TeamCard from '../components/TeamCard'
import { Fragment, useEffect, useState } from 'react'
import TestimonialDetail from '../components/Testimonial/TestimonialDetail'
import AliceCarousel from 'react-alice-carousel'
import Brands from '../components/Brands'
import InfoText from '../components/InfoText'
import Records from '../components/Records'
import teams from '../data/teams'
import Link from 'next/link'

const AboutUs = () => {
	const [items, setItems] = useState(null)

	useEffect(() => {
		const items = testimonials?.map((item, index) => {
			const { name, image, description } = item

			return (
				<TestimonialDetail
					name={name}
					image={image}
					description={description}
					key={index}
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
		1400: {
			items: 3,
		},
	}

	return (
		<div>
			<img
				className=" mt-[9rem] lg:mt-[0rem] absolute top-[40rem] left-0 z-[-100]"
				src="/static/team-bg.png"
				alt=""
			/>
			<div className="bg-hero1 lg:mt-[-5rem] pb-[15rem]">
				<div className="lg:pt-[15rem] pt-[20rem] px-[8rem] lg:px-0 lg:w-[50%] ">
					<h4 className=" bold gradient justify-center lg:justify-start text-[5rem] lg:text-[2rem]">
						About Us
					</h4>
					<h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
						Who are we ?
					</h2>
					<p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
					A Team of highly skilled and dedicated professionals who are passionate about blockchain technology. From blockchain architects to business developers, security auditors to project managers, our team brings together a diverse range of expertise and experience.
					</p>
				</div>
			</div>
			<div className="">
				<h4 className=" bold gradient text-center  text-[5rem] lg:text-[2rem]">
					Our Experts
				</h4>
				<h2 className="bold px-[1rem] lg:px-0 text-[9rem] text-center lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
					Genius minds behind Expelee
				</h2>
			</div>
			<div className="mt-[5rem] px-[10rem] lg:px-[5rem] flex flex-col lg:flex-row justify-center gap-[10.1rem]">
				{teamsData?.map((item, index) => {
					const { name, role, image, description } = item
					return (
						<TeamCard
							key={index}
							name={name}
							role={role}
							image={image}
							description={description}
						/>
					)
				})}
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-[10rem] lg:gap-[4rem] gap-y-[50rem] lg:gap-y-[15rem] mt-[40rem] lg:mt-[15rem] mb-[20rem] lg:mb-[0]">
				{teams?.map((item, index) => {
					// const { name } = item
					return (
						<SubTeamCard
							name={item.name}
							role={item.role}
							description={item.description}
							image={item.image}
							key={index}
						/>
					)
				})}
			</div>

			<div className="mt-[10rem]">
				<div className=" w-[90%] mx-auto mt-[15rem] lg:mt-[10rem">
					<div className="mb-[5.9rem]">
						<h4 className="flex justify-center bold text-[5rem] lg:text-[2rem] gradient">
							TESTIMONIALS
						</h4>
						<h2 className=" flex justify-center medium text-[9rem] lg:text-[5rem]">
							What others are saying
						</h2>
						<Link href="/testimonials">
							<div className="regular pr-[8rem] lg:pr-0 my-[10rem] lg:my-0 text-[5rem] lg:text-[1.5rem] flex justify-end mt-[5rem] underline link">
								<p>View All</p>
							</div>
						</Link>
					</div>
					{items?.length > 0 && (
						<AliceCarousel
							mouseTracking
							infinite
							autoPlayInterval={1000}
							animationDuration={1000}
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
			</div>
			{/* <div>
				<Brands />
			</div> */}
			<InfoText />
			<Records />
		</div>
	)
}

const teamsData = [
	{
		name: 'Divyesh Gupta',
		role: 'Co-Founder, CTO ',
		description:
			'Co-Founder, CTO: Divyesh is the chief technology officer, responsible for the company`s technology strategy and ensuring that its products and services are cutting-edge and innovative.',
		image: '/static/t1.png',
		user: 'divyesh',
	},
	{
		name: 'Anandhu Santhosh Kumar',
		role: 'Co-Founder, CEO',
		description:
			'Co-Founder, CEO: Anandhu is the visionary leader of the company, responsible for setting its strategic direction, overseeing operations, and driving growth',
		image: '/static/t2.png',
		user: 'anandu',
	},
	{
		name: 'Ritik Jain',
		role: 'Co-Founder, COO',
		description:
			'Co-Founder, COO: As the COO, Ritik is in charge of day-to-day operations, ensuring that the company runs smoothly and efficiently.',
		image: '/static/t3.png',
		user: 'ritik',
	},
]

const subTeamData = [
	{
		name: 'Vitalik Buterin, SDE - II',
	},
	{
		name: 'Satoshi Nakamoto, SDE - II',
	},
	{
		name: 'Mark Zuckerberg, SDE - II',
	},
	{
		name: 'Elon Musk, SDE - II',
	},
]

const testimonials = [
	{
		name: ' Priya Singh',
		image: '/static/user-1.png',
		description:
			'Attending the Batch of 2009 Reunions was an incredible experience. It was amazing to catch up with my old classmates, reminisce about our high school days, and see how much everyone has grown. The organizers did a fantastic job planning a variety of events that catered to everyone`s interests. I can`t wait for the next one!"',
	},
	{
		name: ' Johb Doe',
		image: '/static/user-2.png',
		description:
			'Attending the Batch of 2009 Reunions was an incredible experience. It was amazing to catch up with my old classmates, reminisce about our high school days, and see how much everyone has grown. The organizers did a fantastic job planning a variety of events that catered to everyone`s interests. I can`t wait for the next one!"',
	},
]

export default AboutUs
