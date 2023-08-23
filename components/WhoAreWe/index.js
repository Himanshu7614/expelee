import WhoAreWeCard from './WhoAreWeCard'

const WhoAreWe = () => {
	return (
		<div className="mt-[15rem] lg:mt-[19.5rem]">
			<h4 className="flex justify-center bold gradient text-[5rem] lg:text-[2rem] mb-[-30px] lg:mb-[-10px]">
				WHO ARE WE
			</h4>
			<h2 className="flex justify-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[5rem]">
				What makes us different ?
			</h2>
			<div className="flex flex-col items-center lg:flex-row mt-[6.5rem] lg:mt-[5.9rem] gap-[7.3rem] px-[1rem]">
				{whoAreWeData?.map((item) => {
					const { id, title, image, description } = item
					return (
						<WhoAreWeCard
							key={id}
							title={title}
							image={image}
							description={description}
						/>
					)
				})}
			</div>
		</div>
	)
}

const whoAreWeData = [
	{
		id: 1,
		title: 'Transparency',
		image: '/static/transparency.svg',
		description: 'At Expelee, we prioritize customer transparency. We believe in open communication, providing detailed updates, and involving clients throughout the blockchain development process. Trust and clarity are at the core of our customer-centric approach.',
	},
	{
		id: 2,
		title: 'Proactive',
		image: '/static/proactive.svg',
		description: 'At Expelee, we pride ourselves on being proactive in the blockchain development industry. We stay ahead of trends, anticipate challenges, and proactively offer innovative solutions to help our clients navigate and excel in the rapidly evolving blockchain landscape.',
	},
	{
		id: 3,
		title: 'Affordable',
		image: '/static/affordable.svg',
		description: 'Expelee offers affordable blockchain development services without compromising on quality. We believe in making advanced technology accessible to all, providing cost-effective solutions tailored to your needs, ensuring exceptional value for your investment.',
	},
]

export default WhoAreWe
