import Link from 'next/link'
import styles from './ServiceCard.module.css'
import TextLink from '../../TextLink'

const ServiceCard = ({ image, title, description, link }) => {
	return (
		<div
			className={`${styles.servicesCard} lg:max-w-[41rem] h-[100rem] lg:h-[30.1rem] lg:pt-[2rem] pt-[5rem] px-[10rem] lg:px-[2rem] lg:mx-[1.5rem] group cursor-pointer`}
		>
			<div className="flex lg:px-0  items-center">
				<div>
					<img className=" w-[18rem] lg:w-[80%]" src={image} alt={title} />
				</div>
				<div>
					<h4 className="medium lg:ml-[0rem] text-[#1f2937] text-[7rem] lg:text-[2.2rem] ml-[1.8rem] mt-[1.5rem]">
						{title}
					</h4>
				</div>
			</div>
			<div>
				<p className="regular text-[5.5rem] lg:text-[1.6rem] mt-[2rem] text-[#33373f]">
					{description}
				</p>
			</div>
			<Link href={link} className="inline-block mt-[1.8rem]">
				<TextLink fontSize="1.6" fontWeight="Regular" link={link} />
			</Link>
		</div>
	)
}

export default ServiceCard
