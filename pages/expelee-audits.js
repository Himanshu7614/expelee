import { Fragment } from 'react'
import Link from 'next/link'
import AuditCard from '../components/AuditCard'
import audits from '../data/audits'
import PrimaryButton from '../components/PrimaryButton'
import Records from '../components/Records'
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css
import Brands from '../components/Brands'

const ExpeleeAudits = () => {
	return (
		<Fragment>
			<div className=" flex lg:flex-row flex-col">
				<div className="lg:pt-[15rem] pt-[20rem] px-[8rem] lg:px-0 lg:w-[50%] ">
					<h4 className=" bold gradient justify-center lg:justify-start text-[6rem] lg:text-[2rem]">
						Expelee Audits
					</h4>
					<h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
						Why Choose Us ?
					</h2>
					<p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
						Our team of experts conducts a comprehensive analysis of smart contracts, diligently identifying any potential code issues. This invaluable feedback helps developers enhance code security and performance.
					</p>
					<p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
						Our extensive audit reports cover both manual and automatic vulnerability assessments, presenting findings in a clear and detailed manner. Additionally, we provide actionable advice on resolving issues and mitigating risks.
					</p>
					<p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
						Notably, our audit certificates are widely accepted by reputable centralized exchanges (CEX), top-tier launchpads, and venture capitalists (VCs), establishing trust and credibility for your project.
					</p>
					<div className="mt-[3.6rem]">
						<Link href={'https://t.me/Ritz_Expelee'}>
							<PrimaryButton text={'Get Audited'} />
						</Link>
					</div>
				</div>
				<img className='lg:w-[50rem]  my-[10rem] lg:ml-[15rem] lg:px-0 px-[5rem]' src="/static/audit-header.png" />
			</div>

			<div className="mt-[10rem] lg:mt-[0rem]">
				<h4 className="flex justify-center bold gradient text-[5rem] lg:text-[2rem] mb-[-30px] lg:mb-[0px]">
					How We Work
				</h4>
				<h2 className="flex justify-center bold mt-[2rem] lg:mt-[0.7rem] text-[9rem] lg:text-[5rem]">
					Our Working Process
				</h2>
				<div className="flex flex-col items-center lg:flex-row mt-[6.5rem] lg:mt-[5.9rem] gap-[7.3rem] px-[7rem]">
					{/* <div className='w-[90%] lg:w-[70%] my-[10rem] mx-auto'> */}
					<Player
						autoPlay
						src="/static/auditProcess.mp4"
					/>
				</div>
				{/* <img className="ml-[5rem]" src="/static/auditsWorkProcess.png" alt="" /> */}
				{/* </div> */}
			</div>

			<div className="flex flex-1 gap-[3rem] px-[5rem] lg:px-[0rem] lg:w-[50%] lg:gap-[2rem] mt-[15rem] lg:mt-[10rem]  self-center">
				<div className="flex">
					<img
						className="rounded-[100%] w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
						src={'/static/smartContract/token.png'}
						alt="caseStudy1"
					/>
				</div>
				<div className="flex-1 ">
					<h4 className="flex bold gradient lg:justify-start text-[5rem] lg:text-[2rem]">
						Audit Report and Audit NFT
					</h4>

					<h2 className="bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
						Additional Benefits Along With Audits
					</h2>
					<p className="regular text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
						Along With the Audit Report, We also provide Audit NFT to every project which signifies that it has successfully completed it’s Audit from us.
					</p>
				</div>
			</div>
			<div className="mt-[10rem] lg:mt-[4rem] px-[9.8rem]">
				{/* <h4 className="flex bold gradient lg:justify-start text-[5rem] lg:text-[2rem]">
					Audit Certificate
				</h4> */}
				<div className=" py-[5rem] lg:px-0 flex lg:flex-row flex-col mt-[1.5rem] gap-[20rem]">
					<div>
						<img
							className="lg:w-[36rem] lg:h-[45.54rem]"
							src="/static/audit-report.png" alt="" />
					</div>
					<div>
						<img
							className="lg:w-[40rem] lg:h-[45.54rem]"
							src="/static/audit-nft.gif"
							alt=""
						/>
					</div>
				</div>
			</div>
			{/* <div className="flex flex-1 gap-[3rem] px-[5rem] lg:px-[0rem] lg:w-[50%] lg:gap-[2rem] mt-[15rem] lg:mt-[10rem]  self-center">
				<div className="flex">d
					<img
						className="rounded-[100%] w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
						src={'/static/smartContract/token.png'}
						alt="caseStudy1"
					/>
				</div>
				<div className="flex-1 ">
					<h4 className="flex bold gradient lg:justify-start text-[5rem] lg:text-[2rem]">
						Audit Certificate and Audit NFT
					</h4>

					<h2 className="bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
						Smart Contract Auditing
					</h2>
					<p className="regular text-left text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
					Along With the Audit Report, We also provide Audit NFT to every project which signifies that it has successfully completed it’s Audit from us.
					</p>
				</div>
			</div> */}
			<h2 className="bold text-center mt- text-[7rem] lg:text-[4rem] mt-[3.7rem]">
				Recent Audit Reports
			</h2>
			<div className="px-[10rem] lg:px-0 flex flex-col gap-[7rem] lg:flex-row lg:gap-[5rem] mt-[2rem]">
				{audits && audits?.map((item) => (
					<AuditCard
						key={item.id}
						image={item.image}
						text={item.text}
						name={item.name}
						date={item.date}
						slug={item.slug}
						contractLink={item.contractLink}
						nftLink={item.nftLink}
					/>
				))}
			</div>
			<Link href={"/all-audits"} className=" mt-[5rem] flex justify-center">
				<PrimaryButton text="See All Audits" />
			</Link>
			<h2 className="bold text-center mt- text-[7rem] lg:text-[3rem] mt-[5rem]">
			Launchpad Partner
			</h2>
			<div className='mt-[-5rem]'>
			<Brands />
			</div>
			<Records
				products={{ count: 200, text: 'Projects Audited' }}
				members={{ count: 100, text: 'Million Dollars Saved' }}
				partners={{ count: 1000, text: 'Vulnerabilities Fixed' }}
				happyClients={{ count: 10, text: 'Partners' }}
			/>
		</Fragment>
	)
}

export default ExpeleeAudits
