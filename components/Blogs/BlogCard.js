import Link from 'next/link'
import TextLink from '../TextLink'
import styles from './Blogs.module.css'

const BlogCard = ({ image, date, title, description, link }) => {
	return (
		<div
			className={`${styles.blogCard} shadowCard rounded-[3rem] lg:rounded-[1.1rem] px-[4rem] py-[5rem] lg:py-0 lg:px-[0rem] z-0 w-[100rem] lg:max-w-[41.4rem] h-[146rem] lg:h-[43rem] relative card`}
		>
			<div className="w-full">
				<img className={styles.clip} src={image} alt="" />
			</div>
			<div
				className={` px-[4rem] py-[1rem] lg:px-[1.5rem] lg:py-[1rem] absolute z-10 flex flex-col justify-center h-[75rem] lg:h-[25rem]`}
			>
				<div className="flex justify-between">
					<span className="text-[#a0a0a0] text-[4.5rem] lg:text-[14px] regular">
						{date}
					</span>
					{/* <img
						src="/static/icon-share.svg"
						className="w-[75px] lg:w-[22.37px]"
						alt=""
					/> */}
				</div>
				<div>
				<h4 className="text-[5.5rem] lg:text-[2.1rem] medium">
					{title}
				</h4>
				<p className="text-[5.5rem] lg:text-[1.4rem] regular">
					{description}
				</p>
				</div>
				<div className="mt-[1rem] group justify-center">
					<Link href={link ? link : ''}>
					<TextLink fontSize="1.6" fontWeight="Regular" />
					</Link>
				</div>
			</div>
		</div>
	)
}
export default BlogCard
