import { useEffect, useState } from 'react'
import axios from 'axios'
import { CoinList } from '../../config/api'
import SearchInput from '../../components/SearchInput'
import CryptoPriceTable from '../../components/CryptoPriceTable'
import Brands from '../../components/Brands'
import Records from '../../components/Records'

const ExpeCryptoHunterPage = () => {
	const [tokens, setTokens] = useState([])
	const [search, setSearch] = useState('')
	const [currency, setCurrency] = useState('USD')
	const [loading, setLoading] = useState(true)
	// const [error, setError] = useState({ isError: false, message: '' })

	const handleSearch = (tokens) => {
		return tokens.filter(
			(token) =>
				token.name.toLowerCase().includes(search) ||
				token.symbol.toLowerCase().includes(search)
		)
	}

	const fetchCoins = async () => {
		const tokensAPI = CoinList(currency)
		const { data } = await axios.get(tokensAPI)
		setTokens(data)
	}

	useEffect(() => {
		fetchCoins()
		setLoading(false)
	}, [currency])

	return (
		<div className="mt-[25rem]  lg:mt-[12rem] lg:mb-[12.5rem]">
			<div className="flex flex-col items-center">
				<h1 className="bold leading-[9rem] text-[8rem]  lg:text-[6.3rem]">
					Expe Crypto Hunter
				</h1>
				<p className="mt-[0.8rem] regular px-[8rem] text-[#5C5C5C] text-[5rem] lg:text-[2rem]">
					Get all the Info regarding your favorite Crypto Currency
				</p>
			</div>

			{/* Search Input */}
			<SearchInput
				classes="mt-[5.2rem] mb-[6.5rem]"
				value={search}
				currency={currency}
				currencyHandler={(e) => setCurrency(e.target.value)}
				searchHandler={(e) => setSearch(e.target.value)}
			/>

			{/* Price Table */}
			<CryptoPriceTable
				tokens={tokens}
				handleSearch={handleSearch}
				currency={currency}
				loading={loading}
				handleLoading={() => setLoading(!loading)}
			/>
			<Records />
		</div>
	)
}

export default ExpeCryptoHunterPage
