import React from 'react'
import TeamCard from '../components/TeamCard'
import SubTeamCard from '../components/SubTeamCard'
import Card from '../components/Card'
import InfoText from '../components/InfoText'
import teams from '../data/teams'

const Team = () => {
	return (
		<div>
			<img
				className=" mt-[9rem] lg:mt-[0rem] absolute top-[0rem] left-0 z-[-100]"
				src="/static/team-bg.png"
				alt=""
			/>
			<div className="mt-[25rem] lg:mt-[9rem]  mx-auto w-[90%] lg:w-[50%] ">
				<h4 className="bold gradient text-center  text-[5rem] lg:text-[2rem]">
					Our Team
				</h4>
				<h2 className="bold text-[9rem] text-center lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
					Who are we?
				</h2>
				<p className="regular text-center text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
				A Team of highly skilled and dedicated professionals who are passionate about blockchain technology. From blockchain architects to business developers, security auditors to project managers, our team brings together a diverse range of expertise and experience.
				</p>
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
			<InfoText />
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

export default Team
