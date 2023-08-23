import React from 'react'

const TextLink = ({
	text = 'Learn More',
	fontSize = '1.4',
	fontWeight = 'semiBold',
}) => {
	return (
		<div className="flex items-center gap-[3rem] lg:gap-[0.7rem] cursor-pointer">
			<p
				className={`font-averta${fontWeight} text-[6rem] lg:text-[1.7rem] text-transparent bg-clip-text bg-gradient-to-r from-[#3B3BF9]  to-[#10E0F9]`}
			>
				{text}
			</p>
			<img
				src="/static/learnMoreArrow.svg"
				alt="Learn More"
				className="w-[5.5rem] lg:w-[1.7rem] lg:h-[1.2rem] ml-[5px] transition-all duration-500 group-hover:translate-x-[1.5rem]"
			/>
		</div>
	)
}

export default TextLink
