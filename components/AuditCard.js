import Link from 'next/link'

// background: #FFFFFF;
// border: 1px solid #E5E5E5;
// box-shadow: -4px 4px 47px rgba(145, 158, 171, 0.43);

const AuditCard = ({
	name,
	text,
	image,
	date,
	slug,
	contractLink,
	nftLink,
}) => {
	return (
		<div className="shadowCard rounded-[2.8rem] px-[7rem] lg:px-[4rem] py-[5rem] lg:py-[2rem] w-[100%]">
			<div className="flex items-center gap-[3rem] lg:gap-[1rem]">
				{/* <div>
					<img
						className="w-[15rem] lg:w-[4rem]"
						src={'/static/github.svg'}
						alt=""
					/>
				</div> */}
				<div>
					<h3 className="bold text-[5rem] lg:text-[2.2rem]">{name}</h3>
					{/* <p className="regular text-[5rem] lg:text-[1.5rem]">{date}</p> */}
				</div>
			</div>
			<div className="mt-[8rem] lg:mt-[2rem] flex flex-col gap-[8rem] lg:gap-[2rem]">
				<img src={image} alt="" />
				<p className="regular text-[5rem] lg:text-[1.5rem]">{text}</p>
			</div>
			<div className="flex gap-[7rem] lg:gap-[3.5rem] justify-center mt-[4rem] lg:mt-[2rem]">
				<Link
					href={contractLink ?? ''}
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer"
				>
					<div className="cursor-pointer">
						<img
							src="/static/contract-icon.svg"
							className="w-[17rem] lg:w-full"
							alt=""
						/>
						<p className="regular text-[4rem] lg:text-[1.5rem] text-center">
							Contract
						</p>
					</div>
				</Link>
				<Link href={`/audit?name=${slug}`} className="cursor-pointer">
					<img
						alt=""
						src="/static/audit-icon.svg"
						className="w-[17rem] lg:w-full"
					/>
					<p className="regular text-[4rem] lg:text-[1.5rem] text-center">
						Audit
					</p>
				</Link>
				<Link
					href={nftLink ?? ''}
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer"
				>
					<div className="cursor-pointer">
						<img
							alt=""
							src="/static/nft-icon.svg"
							className="w-[17rem] lg:w-full"
						/>
						<p className="regular text-[4rem] lg:text-[1.5rem]  text-center">
							NFt
						</p>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default AuditCard
