import Image from 'next/image'

const WhoAreWeCard = ({ image, title, description }) => {
	return (
		<div className="flex gap-[3rem] lg:gap-[2.7rem] w-[100rem]">
			<div className="relative w-[15rem] h-[15.4rem] lg:w-[6rem] lg:h-[6.4rem]">
				<Image src={image} alt={title} fill />
			</div>
			<div className="flex-1">
				<h3 className="medium text-[6rem] lg:text-[2.7rem] text-[#1f2937]">
					{title}
				</h3>
				<p className="regular text-[6rem] lg:text-[1.8rem] text-[#33373f]">
					{description}
				</p>
			</div>
		</div>
	)
}

export default WhoAreWeCard
