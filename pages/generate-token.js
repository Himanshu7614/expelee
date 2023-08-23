import Brands from '../components/Brands'
import GenerateTokenForm from '../components/GenerateTokenForm'

const GenerateTokenPage = () => {
	return (
		<div className="mt-[25rem] lg:mt-[12rem] lg:mb-[12.5rem]">
			<div className="flex flex-col items-center">
				<h1 className="bold leading-[9rem] text-[8rem] lg:text-[6.3rem]">Generate Token</h1>
				<p className="mt-[.8rem] px-[8rem] regular text-[#5C5C5C] text-[6rem] lg:text-[2rem]">
					Get all the Info regarding your favorite Crypto Currency
				</p>
			</div>
			<GenerateTokenForm />
			{/* <Brands /> */}
		</div>
	)
}

export default GenerateTokenPage
