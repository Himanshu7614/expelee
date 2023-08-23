import BlogCard from "../components/Blogs/BlogCard"
import InfoText from "../components/InfoText"

const ScamHunter = () => {
    return (
        <div className="mt-[25rem] lg:mt-[12rem] lg:mb-[12.5rem]">
            <div className="flex flex-col items-center">
                <h1 className="bold leading-[9rem] text-[8rem] lg:text-[6.3rem]">Scam Hunter</h1>
                <p className="mt-[.8rem] px-[8rem]  regular text-[#5C5C5C] text-[6rem] lg:text-[2rem]">
                    Get all the Info regarding your favorite Crypto Currency
                </p>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-[6.7rem] lg:px-0 px-[10rem] mt-[9rem]">
            {row?.map((i) => (
					<BlogCard key={i} index={i} />
				))}
			</div>
            <InfoText />
        </div>
    )
}

const row = [5, 6, 7, 8]


export default ScamHunter