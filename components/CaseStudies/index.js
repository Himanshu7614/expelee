import Image from 'next/image'
import TextLink from '../TextLink'
import { motion } from 'framer-motion'
import Link from 'next/link'
import caseStudies from "../../data/case-studies" 
const CaseStudies = () => {
	return (
		<div className="mt-[15rem] lg:mt-[19.5rem]">
			<h4 className="flex justify-center bold gradient text-[5rem] lg:text-[2rem] mb-[-30px] lg:mb-[-10px]">
				CASE STUDIES
			</h4>
			<h2 className="flex justify-center bold mt-[0.7rem] text-[9rem] lg:text-[5rem]">
				Our Projects
			</h2>
			<Link href="/case-studies">
					<div className="regular justify-center pr-[8rem] lg:pr-0 my-[10rem] lg:my-0 text-[5rem] lg:text-[1.5rem] flex lg:justify-end mt-[5rem] underline link">
						<p>View All</p>
					</div>
				</Link>
			{caseStudies?.map((caseStudy) => {
				const { id, title, description, images } = caseStudy;
				if (id <= 2) {
					return (
						<>
							<div className={id % 2 === 0 ? "flex flex-col lg:flex-row-reverse px-[7rem] gap-[3rem] lg:gap-[15rem]" : "flex flex-col lg:flex-row px-[7rem] gap-[3rem] lg:gap-[15rem]"}>
								<div className="flex-1 self-center">
									<img
										className="w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
										src={images[0]}
										alt="caseStudy1"
									/>
									<h2 className="bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
										{title}
									</h2>
									<p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C]">
										{description[0]}
									</p>
									<div className="group mt-[1.8rem]">
										<Link href={`/case-studies/${id}`}><TextLink fontSize="1.6" fontWeight="Regular" /></Link>
									</div>
								</div>
								{/* Image */}
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									transition={{ duration: 0.5 }}
									variants={{
										visible: { opacity: 1, scale: 1 },
										hidden: { opacity: 0, scale: 0 }
									}}
									className="flex-1 order-first lg:order-last">
									<Image
										width={715}
										height={428.33}
										src={images[1]}
										alt="project1"
									/>
								</motion.div>
							</div>
						</>
					)
				}

			})}
		</div>
	)
}

export default CaseStudies
