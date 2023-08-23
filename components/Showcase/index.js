import Link from 'next/link'
import LearnMore from '../TextLink'
import styles from './Showcase.module.css'

const Showcase = () => {
	return (
		<div
			className={`lg:${styles.showcase}  group relative  mt-[25rem] lg:mt-[15.2rem] text-center flex flex-col lg:justify-center items-center`}
		>
			<img
				src={'/static/mobileShowcasebg.png'}
				className={`absolute top-[-29rem] z-[-10] lg:hidden`}
			/>
			<h1 className="bold leading-[9rem] lg:px-0 px-[7rem] lg:leading-[8rem] text-[9rem] lg:text-[6.3rem] lg:w-[90.8rem] text-[#33373f]">
			Empowering Technology {' '}
				<span className="gradientHeading">Solutions for a Seamless Future</span>
			</h1>
			<p className="my-[3.5rem] medium px-[9rem] text-[black] text-[6rem] lg:text-[2.4rem] lg:w-[75rem] lg:my-[3.4rem]">
				On the way to build numerous products that will empower IT
				Industry in upcoming years
			</p>

			<Link href={'https://t.me/Ritz_Expelee'}>
				<LearnMore text="Lets Talk" fontSize="2" />
			</Link>
		</div>
	)
}
export default Showcase
