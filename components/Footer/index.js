import Link from "next/link"

const Footer = () => {
	return (
		<footer>
			<div className="mt-[15rem] lg:mt-[10rem flex flex-wrap flex-col lg:flex-row mt-[10rem] px-[5rem] lg:px-0">
				<div className="flex-1 pr-[12rem] gap-[1.4rem]">
					<img
						src={'/static/FooterLogo.png'}
						alt="Footer Logo"
						className="w-[25rem] lg:w-[11.3rem]"
					/>
					<p className="regular text-[#444444] text-[6rem] lg:text-[1.7rem]">
					On the way to build numerous products that will empower IT Industry in upcoming years
					</p>
				</div>
				{/* Col - 1 */}
				<div className=" flex-1 flex flex-col gap-[2.7rem] mt-[10rem] lg:mt-[0]">
					<div>
						<h4 className="medium text-[5rem] lg:text-[2.2rem] text-[#000000]">
						Services
						</h4>
					</div>
					<div className="flex flex-col gap-[1rem] text-[6rem] lg:text-[1.9rem] text-[#000000]">
						<Link href="/expelee-audits"><p className="regular link cursor-pointer">Expelee Audits</p></Link>
						{/* <Link href="/expelee-veeting"><p className="regular link cursor-pointer">Expelee Vetting</p></Link> */}
						<Link href="/expe-diligence"><p className="regular link cursor-pointer">Expe Diligence (KYC)</p></Link>
						<Link href="/contract-design"><p className="regular link cursor-pointer">Contract Design</p></Link>
						<Link href="/expe-dapp-creator"><p className="regular link cursor-pointer">Expe dApp Creator</p></Link>
						<Link href="/expe-nft"><p className="regular link cursor-pointer">Expe NFT</p></Link>
						<Link href="https://metanmore.expelee.com/"><p className="regular link cursor-pointer">Expe Marketing</p></Link>
					</div>
				</div>
				{/* Col- 2 */}
				<div className="flex-1 flex flex-col gap-[2.7rem] mt-[10rem] lg:mt-[0]">
					<div>
						<h4 className="medium text-[5rem] lg:text-[2.2rem] text-[#000000]">
						Solutions
						</h4>
					</div>
					<div className="flex flex-col gap-[1rem] text-[6rem] lg:text-[1.9rem]">
						{/* <Link href="/blockchain-development"><p className="regular link cursor-pointer">Blockchain Development</p></Link> */}
						<Link href="/expe-crypto-hunter"><p className="regular link cursor-pointer">Expe Crypto Hunter</p></Link>
						<Link href="/generate-token"><p className="regular link cursor-pointer">Generate Token</p></Link>
						<Link href="/blogs"><p className="regular link cursor-pointer">Expe Blogs</p></Link>
						<Link href="/case-studies"><p className="regular link cursor-pointer">Case Studies</p></Link>
					</div>
				</div>

				{/* Col - 3 */}
				<div className="flex-1 flex flex-col gap-[2.7rem] mt-[10rem] lg:mt-[0]">
					<div>
						<h4 className="medium text-[6rem] lg:text-[1.9rem] text-[#000000]">
							Connect with us
						</h4>
					</div>
					<div className="flex flex-col gap-[1rem]">
						<div className="flex gap-[0.4rem]">
							<img
								src={'/static/mail.svg'}
								alt="email"
								className="w-[4.3rem] lg:w-[2.4rem]"
							/>
							<div className="flex items-center gap-[1.2rem] text-[5rem] lg:text-[1.9rem] cursor-pointer link" onClick={() => window.location = 'mailto:business@expelee.com'}>
								<h4 className="medium">Email:</h4>
								<p className="regular pt-[0.2rem]">business@expelee.com</p>
							</div>
						</div>
						<div className="flex gap-[3rem] lg:gap-[1rem]">
						<Link href="https://github.com/expelee-co"><img className={`w-[9rem] lg:w-[3rem] lg:h-[3rem]`} src={'/static/github.svg'} alt='githubin' /></Link>
						<Link href="https://instagram.com/expeleeofficial"><img className={`w-[9rem] lg:w-[3rem] lg:h-[3rem]`} src={'/static/instagram.svg'} alt='instagramin' /></Link>
						<Link href="https://discord.gg/pApdJyrjMg"><img className={`w-[9rem] lg:w-[3rem] lg:h-[3rem]`} src={'/static/discord.svg'} alt='discordin' /></Link>
						<Link href="https://medium.com/@expelee"><img className={`w-[9rem] lg:w-[3rem] lg:h-[3rem]`} src={'/static/medium.svg'} alt='mediumin' /></Link>
					</div>
					<div className="mt-[4rem] lg:mt-[2rem]">
					<p className="medium text-[4rem] lg:text-[1.5rem] pt-[0.2rem]">Dubai Silicon Oasis,</p>
					<p className="medium text-[4rem] lg:text-[1.5rem] pt-[0.2rem]">DDP, Building A2, </p>
					<p className="medium text-[4rem] lg:text-[1.5rem] pt-[0.2rem]">Dubai, United Arab Emirates </p>
					<p className="medium text-[4rem] lg:text-[1.5rem] pt-[0.2rem]">+971 558957731 </p>
					</div>
				</div>
			</div>
			</div>
			<div className="px-[11.8rem] mt-[5rem] lg:mt-[2rem] py-[2rem] ">
				<hr />
				<p className=" flex justify-center medium text-[5rem] lg:text-[1.7rem] mt-[2.1rem]">
					Copyright 2023, All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
