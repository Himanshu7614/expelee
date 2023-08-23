import { useState } from 'react'
import styles from './SearchInput.module.css'

const SearchInput = ({
	classes,
	search,
	searchHandler,
	currency,
	currencyHandler,
}) => {
	return (
		<div
			className={`${styles.search} w-[100rem] h-[12rem] lg:w-[77.7rem] lg:h-[9.1rem] mx-auto ${classes}`}
		>
			<input
				type="text"
				placeholder="Search For a Crypto Currency..."
				className="w-full h-full rounded-[8.7rem] border-0 text-[2rem] placeholder:text-[4rem] lg:placeholder:text-[2rem] placeholder:text-[#9c9c9c] px-[4.4rem] py-[3rem] placeholder:regular"
				value={search}
				onChange={searchHandler}
			/>
			<select
				className={`${styles.currencySelector} medium text-[2rem] w-[16rem] lg:w-[14.6rem] h-full text-[#727272] px-[3.5rem] lg:px-[2.7rem] `}
				name="currency"
				id="currency"
				value={currency}
				onChange={currencyHandler}
			>
				<option value="USD">USD</option>
				<option value="INR">INR</option>
			</select>
		</div>
	)
}

export default SearchInput
