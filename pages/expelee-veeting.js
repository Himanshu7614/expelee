import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import WhoAreWeCard from '../components/WhoAreWe/WhoAreWeCard'
import Records from '../components/Records'
import InfoText from '../components/InfoText'

const ExpeleeVetting = () => {
	
	return (
		<div>
			<div className='lg:mt-[-5rem] flex lg:flex-row flex-col'>
				<div className='lg:pt-[15rem] pt-[20rem] px-[8rem] lg:px-0 lg:w-[50%] '>
					<h4 className=" bold gradient justify-center lg:justify-start text-[6rem] lg:text-[2rem]">Expelee Vetting</h4>
					<h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
						Vetting & Certification
					</h2>
					<p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
					Expelee`s certification serves as a testament to our unwavering commitment to maintaining a strong reputation. We meticulously evaluate every project, conducting thorough analyses and verifications.
					</p>
					<p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
					Our comprehensive examination encompasses all aspects of your project, including the team, community, code, and wallets, among others. By undertaking this responsibility, we aim to safeguard investors from potential scammers and protect their interests
					</p>
					<p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
					Rest assured that Expelee takes its role seriously and employs stringent measures to ensure the highest level of trust and security in the blockchain industry.
					</p>
					<div className="mt-[3.6rem]">
						<PrimaryButton text={'Get Vetted'} />
					</div>

				</div>
				<img  className='lg:w-[50rem] lg:my-[15rem] my-[10rem] lg:ml-[15rem] lg:px-0 px-[5rem]' src="/static/exp-vetting.png" />
			</div>
			<div className="mt-[15rem] lg:mt-[10rem]">
				<h4 className="flex justify-center bold gradient text-[5rem] lg:text-[2rem] mb-[-30px] lg:mb-[0px]">
					WHY CHOOSE US
				</h4>
				<h2 className="flex justify-center medium mt-[2rem] lg:mt-[0.7rem] text-[9rem] lg:text-[5rem]">
					Benefits of Being Vetted
				</h2>
				<div className="flex flex-col items-center lg:flex-row mt-[6.5rem] lg:mt-[5.9rem] gap-[7.3rem] px-[5rem]">
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
			<div className="mt-[15rem] lg:mt-[10rem]">
				<h4 className="flex justify-center bold gradient text-[5rem] lg:text-[2rem] mb-[-30px] lg:mb-[0px]">
					HOW WE WORK
				</h4>
				<h2 className="flex justify-center medium mt-[2rem] lg:mt-[0.7rem] text-[9rem] lg:text-[5rem]">
					Our Working Process
				</h2>
				<div className="flex flex-col items-center lg:flex-row mt-[6.5rem] lg:mt-[5.9rem] gap-[7.3rem] px-[7rem]">
					<img className='ml-[5rem]' src="/static/vetting.png" alt=""/>
				</div>
			</div>
			<InfoText />
			<Records />
		</div>
	)
}

const whoAreWeData = [
	{
		id: 1,
		title: 'Transparency',
		image: '/static/transparency.svg',
		description: `We prioritize transparency in our certification services. Our clients receive clear and open communication throughout the process, ensuring they have a complete understanding of the evaluation criteria and outcomes for their project's certification.`,
	},
	{
		id: 2,
		title: 'Proactive',
		image: '/static/proactive.svg',
		description: `Our proactive approach ensures thorough verification and certification services. We actively assess projects, providing comprehensive analyses and robust certification to safeguard investors and foster trust in the blockchain ecosystem.`,
	},
	{
		id: 3,
		title: 'Affordable',
		image: '/static/affordable.svg',
		description: `We offer affordable certification services without compromising quality. Our clients can access reliable and comprehensive evaluations at competitive prices, making our certification service cost-effective and accessible for blockchain projects.`
	},
]

export default ExpeleeVetting