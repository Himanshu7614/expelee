import React from 'react'
import BlogCard from '../components/Blogs/BlogCard'

const Blogs = () => {
	return (
		<div className="mt-[15rem] lg:mt-[10rem] lg:px-0 px-[10rem]">
			<div className="mb-[4.6rem]">
				<h4 className="flex justify-center bold gradient text-[6rem] lg:text-[2rem] mb-[-30px] lg:mb-[0px]">
					OUR BLOGS
				</h4>
				{/* <h2 className="flex justify-center bold mt-[0.7rem] text-[9rem] lg:text-[5rem]">
					Learn more from us
				</h2> */}
			</div>
			{/* <div className="flex lg:flex-row flex-col-reverse">
				<div className="bg-white flex-1 px-[8rem] lg:px-[5rem] py-[4rem] ">
					<h4 className="bold text-[8rem] text-center lg:text-start lg:text-[3rem]">
						What is NFT all about ?
					</h4>
					<div className="flex  mt-[10rem] lg:mt-[2rem] items-center gap-[3rem] lg:gap-[1rem]">
						<div>
							<img
								className="w-[15rem] lg:w-[4rem]"
								src={'/static/blog-profile.png'}
								alt=""
							/>
						</div>
						<div className="">
							<p className="bold text-[6rem] lg:text-[1.5rem]">
								Bishal Chettri
							</p>
							<p className="regular text-[6rem] lg:text-[1.5rem]">
								12 Sep 2023
							</p>
						</div>
					</div>
					<p className="mt-[2rem] regular text-[6rem] lg:text-[1.5rem]">
						What is NFT all about? NFT or Non-fungible token is a digital asset
						that portrays real-world objects such as videos, music, art, in-game
						items, and even memes. You can buy and sell NFTs online more often
						with cryptocurrency. Furthermore, the same underlying software used
						in crypto encodes them.
					</p>
				</div>
				<div>
					<img
						className="p-[2rem] lg:p-0 blog-clip"
						src="/static/blog-nft.png"
						alt=""
					/>
				</div>
			</div> */}
			<div className="flex mt-[10rem] flex-col items-center lg:flex-row gap-[6.7rem]">
			{row?.map((i) => {
					const {image, date, title, description, link} = i;
					return <BlogCard 
					key={i} 
					image={image}
					date={date}
					title={title}
					description={description}
					link={link}
					/>

				})}
			</div>
			<div className="flex flex-col items-center lg:flex-row gap-[6.7rem] mt-[9rem]">
			{rows?.map((i) => {
					const {image, date, title, description, link} = i;
					return <BlogCard 
					key={i} 
					image={image}
					date={date}
					title={title}
					description={description}
					link={link}
					/>

				})}
			</div>
		</div>
	)
}

const row = [	{
	id: 1,
	image:'/static/blog/blog-1.png',
	date: 'March 2023',
	title: 'Metaweb: The Future Internet',
	description: 'It is safe to say that we are all past the uncertainty regarding web 3.0 & whether it will be able…',
	link: 'https://medium.com/@expelee/metaweb-the-future-internet-dbc8d0b5c008'
},
{
	id: 2,
	image:'/static/blog/blog-2.png',
	date: 'Feb 2023',
	title: 'Major ‘E’ Concepts in the Crypto Space',
	description: 'Web3 is a growing domain with the latest trends and concepts coming in. To help you stay informed…',
	link: 'https://medium.com/@expelee/want-to-go-deep-dive-into-web3-here-are-major-e-concepts-in-the-crypto-space-261563142f82'
},
{
	id: 3,
	image:'/static/blog/blog-3.png',
	date: 'Jan 2023',
	title: 'Web3 & Finance Tips to Note in 2023',
	description: 'Happy New Year, everyone! We are glad to welcome you onboard our editorials in 2023....',
	link: 'https://medium.com/@expelee/16-web3-and-18-financial-intelligence-tips-to-note-in-2023-2bdac9c3309c'
},
{
	id: 4,
	image:'/static/blog/blog-4.png',
	date: 'Dec 20223',
	title: '9 Ways to Identify Scams in the Crypto Space',
	description: 'One of the most popular investment advice in the DeFi space is to first carry out a deep research..',
	link: 'https://medium.com/@expelee/9-ways-to-identify-scams-in-the-crypto-space-b7f92f0c1480'
},]
const rows = [
	{
		id: 5,
		image:'/static/blog/blog-5.png',
		date: 'Nov 2022',
		title: 'The Reasons Behind FTX Collapse: True Story Revealed',
		description: 'FTX collapse sent some rude shocking waves to everyone across the crypto industry. After all, it’s not just any crypto…',
		link: 'https://medium.com/@expelee/the-reasons-behind-ftx-collapse-true-story-revealed-884b6fa32909'
	},
	{
		id: 6,
		image:'/static/blog/blog-6.png',
		date: 'Oct 2022',
		title: 'How much Supercomputer power does a Bitcoin Server have?',
		description: 'A supercomputer can process one quadrillion of FLOPS, i.e., Floating Point...',
		link: 'https://medium.com/@expelee/how-much-supercomputer-power-does-a-bitcoin-server-have-4141c3361d8d'
	},
	{
		id: 7,
		image:'/static/blog/blog-7.png',
		date: 'Sep 2022',
		title: 'What Is NFT all about?',
		description: 'NFT or Non-fungible token is a digital asset that portrays real-world objects such as videos, music, art, in-game items, and  even memes. You can buy and sell NFTs online more often with...',
		link: 'https://medium.com/@expelee/what-is-nft-all-about-4c103aa7763a'
	},
	{
		id: 8,
		image:'/static/blog/blog-8.png',
		date: 'Aug 2022',
		title: 'Breaking into the Blockchain Space',
		description: 'The financial and social globe has evolved in a very unique way in the past decade, making data the most precious...',
		link: 'https://medium.com/@expelee/breaking-into-the-blockchain-space-246e3940401d'
	}]

export default Blogs
