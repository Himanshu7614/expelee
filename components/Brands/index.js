import React, { useEffect } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'

const Brands = () => {
	return (
		<div className="banner-container mt-[10rem] lg:mt-[5rem]  px-[3rem] lg:w-[100%]">
			<div className='photobanner flex gap-[1rem]'>
				{brands?.map((item) => {
					return <img onClick={() => window.location.href = item.link}  key={item.id} className={item.id === 1 ? "first" : ""} src={item.image} alt="" />
				})}
			</div>
		</div>
	)
}

// const brands = [
// 	{
// 		id: 1,
// 		image: '/static/luxpad.png',
// 		height: 67.67,
// 		link: 'https://luxpad.io/',
// 	},
// 	{
// 		id: 2,
// 		image: '/static/probit.png',
// 		height: 60.77,
// 		link: 'https://www.probit.com/en-us/',
// 	},
// 	{
// 		id: 3,
// 		image: '/static/pandasale.png',
// 		height: 60.83,
// 		link: 'https://pandasale.finance/',
// 	},
// 	{
// 		id: 4,
// 		image: '/static/phoenix.png',
// 		height: 60.76,
// 		link: 'https://t.me/phoenixholdings',
// 	},
// 	{
// 		id: 5,
// 		image: '/static/8bitearn.png',
// 		height: 48.17,
// 		link: 'https://www.8bitearn.com/',
// 	},
// 	{
// 		id: 6,
// 		image: '/static/probit.png',
// 		height: 60.77,
// 		link: 'https://www.probit.com/en-us/',
// 	},
// 	{
// 		id: 7,
// 		image: '/static/pandasale.png',
// 		height: 60.83,
// 		link: 'https://pandasale.finance/',
// 	},
// 	{
// 		id: 8,
// 		image: '/static/phoenix.png',
// 		height: 60.76,
// 		link: 'https://t.me/phoenixholdings',
// 	},
// 	{
// 		id: 9,
// 		image: '/static/8bitearn.png',
// 		height: 48.17,
// 		link: 'https://www.8bitearn.com/',
// 	},
// 	{
// 		id: 10,
// 		image: '/static/luxpad.png',
// 		height: 67.67,
// 		link: 'https://luxpad.io/',
// 	},
// 	{
// 		id: 11,
// 		image: '/static/probit.png',
// 		height: 60.77,
// 		link: 'https://www.probit.com/en-us/',
// 	},
// 	{
// 		id: 12,
// 		image: '/static/pandasale.png',
// 		height: 60.83,
// 		link: 'https://pandasale.finance/',
// 	},
// 	{
// 		id: 13,
// 		image: '/static/phoenix.png',
// 		height: 60.76,
// 		link: 'https://t.me/phoenixholdings',
// 	},
// 	{
// 		id: 14,
// 		image: '/static/8bitearn.png',
// 		height: 48.17,
// 		link: 'https://www.8bitearn.com/',
// 	},
// 	{
// 		id: 15,
// 		image: '/static/probit.png',
// 		height: 60.77,
// 		link: 'https://www.probit.com/en-us/',
// 	},
// 	{
// 		id: 16,
// 		image: '/static/pandasale.png',
// 		height: 60.83,
// 		link: 'https://pandasale.finance/',
// 	},
// 	{
// 		id: 17,
// 		image: '/static/phoenix.png',
// 		height: 60.76,
// 		link: 'https://t.me/phoenixholdings',
// 	},
// 	{
// 		id: 18,
// 		image: '/static/8bitearn.png',
// 		height: 48.17,
// 		link: 'https://www.8bitearn.com/',
// 	},
// ]

const brands = [
		{
		id: 1,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 2,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 3,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 4,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 5,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 6,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 7,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 8,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 9,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 10,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 11,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 12,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 13,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 14,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	{
		id: 15,
		image: '/static/pinksale.png',
		height: 99.99,
		link: 'https://www.pinksale.finance/',
	},
	
]

export default Brands
