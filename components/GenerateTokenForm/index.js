import FormInput from '../FormInput'
import FormGroup from './FormGroup'
import PrimaryButton from '../PrimaryButton'
import styles from './GenerateTokenForm.module.css'

const GenerateTokenForm = () => {
	return (
		<form className={`${styles.form} w-[100%] lg:w-[90rem] p-[3.6rem] lg:mx-auto mx-[5rem] mt-[9rem]`}>
			{/* Token */}
			<FormGroup
				title="Token"
				desc="This information will be used to identify your Token Publily"
			>
				<div className="flex flex-col lg:flex-row gap-[2.2rem] mt-[2.5rem]">
					<FormInput
						name="Token Name"
						type="text"
						placeholder="Eg: Ethereum, Bitcoin"
					/>
					<FormInput
						name="Token Symbol"
						type="text"
						placeholder="Eg: ETH, BTC"
					/>
				</div>
				<FormInput
					name="Supply Amount"
					type="text"
					placeholder="Enter your supply amount"
					styles="mt-[2.5rem]"
				/>
				<FormInput
					name="Dev Wallet Address"
					type="text"
					placeholder="Enter your wallet address"
					styles="mt-[2.5rem]"
				/>
			</FormGroup>

			{/* Buy Taxes */}
			<FormGroup
				title="Buy Taxes"
				desc="provide buy tax rates across in range of 0 to 10%"
				styles="mt-[2.9rem]"
			>
				<div className="flex flex-col lg:flex-row gap-[2.2rem] mt-[2.5rem]">
					<FormInput name="Burn" type="text" placeholder="Enter burn amount" />
					<FormInput name="Dev" type="text" placeholder="Enter dev Amount" />
					<FormInput
						name="Liquidity"
						type="text"
						placeholder="Enter liquidity amount"
					/>
				</div>
			</FormGroup>

			{/* Sell Taxes */}
			<FormGroup
				title="Sell Taxes"
				desc="provide buy tax rates across in range of 0 to 10%"
				styles="mt-[2.9rem]"
			>
				<div className="flex flex-col flex-row gap-[2.2rem] mt-[2.5rem]">
					<FormInput name="Burn" type="text" placeholder="Enter burn amount" />
					<FormInput name="Dev" type="text" placeholder="Enter dev Amount" />
					<FormInput
						name="Liquidity"
						type="text"
						placeholder="Enter liquidity amount"
					/>
				</div>
			</FormGroup>
			<PrimaryButton text="Generate Token" classes="mt-[2.9rem]" />
		</form>
	)
}

export default GenerateTokenForm
