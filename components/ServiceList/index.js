import Image from 'next/image'
import { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import ServiceCard from './ServiceCard'
import services from '../../data/services'

const ServiceList = () => {
	const [items, setItems] = useState(null)

	const responsive = {
		393: {
			items: 1,
		},
		557: {
			items: 1,
		},
		1400: {
			items: 3,
		},
	}

	useEffect(() => {
		const items = services?.map((item) => {
			const { id, image, title, description, link } = item
			return (
				<ServiceCard
					key={id}
					image={image}
					title={title}
					description={description}
					link={link}
				/>
			)
		})
		setItems(items)
	}, [])

	const ArrowPrev = () => (
		<div className="absolute top-[38rem] left-[-10rem] lg:left-[-6rem] lg:top-[15rem]">
			<img
				className="w-[8rem] h-[8rem]  lg:w-[36px] lg:h-[36px]"
				src={'/static/leftArrow.svg'}
				alt="leftArrow"
			/>
		</div>
	)

	const ArrowNext = () => (
		<div className="absolute top-[38rem] right-[-10rem] lg:right-[-6rem] lg:top-[15rem]">
			<img
				className="w-[8rem] h-[8rem]  lg:w-[36px] lg:h-[36px]"
				src={'/static/rightArrow.svg'}
				alt="rightArrow"
			/>
		</div>
	)

	return (
		<div className="w-[90%] mx-auto lg:w-[100%] relative mt-[10rem] lg:mt-[9.5rem] flex px-[5rem] gap-[8rem] items-center justify-center">
			{/* <div className="flex gap-[4.5rem]">
				{serviceListData?.map((item) => {
					const { id, image, title, description } = item
					return (
						<ServiceCard
							key={id}
							image={image}
							title={title}
							description={description}
						/>
					)
				})}
			</div> */}
			{items?.length > 0 && (
				<AliceCarousel
					mouseTracking
					infinite
					autoPlayInterval={1500}
					animationDuration={1500}
					disableDotsControls
					responsive={responsive}
					items={items}
					keyboardNavigation={true}
					renderPrevButton={ArrowPrev}
					renderNextButton={ArrowNext}
					autoPlay={true}
				/>
			)}
		</div>
	)
}

// const serviceListData = [
// 	{
// 		id: 1,
// 		title: 'Audit',
// 		image: '/static/audit.svg',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
// 	},
// 	{
// 		id: 2,
// 		title: 'dApp Creator',
// 		image: '/static/appCreator.svg',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
// 	},
// 	{
// 		id: 3,
// 		title: 'Contract Design',
// 		image: '/static/contractDesign.svg',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
// 	},
// 	{
// 		id: 4,
// 		title: 'App Creator',
// 		image: '/static/appCreator.svg',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
// 	},
// ]

export default ServiceList
