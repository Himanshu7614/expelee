import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Line } from 'react-chartjs-2'
import Image from 'next/image'
import { Chart, registerables } from 'chart.js'
import axios from 'axios'
import { HistoricalChart, CoinDetails } from '../../config/api'

Chart.register(...registerables)

const numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const TokenDetailsPage = () => {
	const router = useRouter()
	const { token } = router.query

	const [historicData, setHistoricData] = useState([])
	const [tokenDetails, setTokenDetails] = useState([])
	const [days, setDays] = useState(1)
	const [currency, setCurrency] = useState('USD')

	const fetchTokenDetails = async () => {
		const tokenDetailsAPI = CoinDetails(currency, token)
		const { data } = await axios.get(tokenDetailsAPI)
		setTokenDetails(data[0])
	}

	const fetchHistoricData = async () => {
		const chartAPI = HistoricalChart(token, days, currency)

		const { data } = await axios.get(chartAPI)
		setHistoricData(data.prices)
	}

	useEffect(() => {
		if (token) {
			fetchHistoricData()
			fetchTokenDetails()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token, currency, days])

	return (
		<>
			{!historicData?.length ? null : (
				<div className="mt-[210px] lg:mt-[120px] px-[6rem]">
					<button
						className="text-[4.5rem] lg:text-[1.8rem] medium mb-[8rem] lg:mb-[4rem] gradient"
						onClick={() => router.back()}
					>
						&larr; Go Back
					</button>
					<div>
						<div className="flex justify-between">
							{/* Image and Name */}
							<div className="flex mb-[3rem]">
								{/* Token Image and names */}
								<div className="relative w-[15rem] h-[15rem] lg:w-[7.8rem] lg:h-[7.8rem] inline-block">
									<Image
										src={tokenDetails?.image}
										alt={tokenDetails?.name}
										fill
									/>
								</div>
								<div className="flex flex-col ml-[2rem]">
									<span className="medium text-[#5B616E] text-[4.7rem] lg:text-[2.7rem]">
										{tokenDetails?.symbol?.toUpperCase()}
									</span>
									<span className="medium text-[#020202] text-[4.7rem] lg:text-[2.7rem]">
										{tokenDetails?.name}
									</span>
								</div>
							</div>
							{/* Dropdown */}
							<div className="flex self-start">
								<select
									className="dropdown medium text-[2rem]  w-[14.6rem] text-[#727272]  px-[4rem] mr-[3rem] lg:mr-[1.5rem]"
									value={currency}
									onChange={(e) => setCurrency(e.target.value)}
								>
									<option value="USD">USD</option>
									<option value="INR">INR</option>
								</select>
								<select
									className="dropdown medium text-[2rem]  w-[14.6rem] text-[#727272] px-[2.7rem]"
									value={days}
									onChange={(e) => setDays(e.target.value)}
								>
									<option value="1">24 Hours</option>
									<option value="30">30 Days</option>
									<option value="90">3 Months</option>
									<option value="365">1 Year</option>
								</select>
							</div>
						</div>
						<div className="flex mb-[7rem]">
							{/* Price */}
							<div>
								<span className="text-[#5b616e] text-[4rem] lg:text-[1.6rem] bold">
									Price
								</span>
								<h2 className="text-[5.8rem] lg:text-[4rem] text-[#555]">
									{currency.toLowerCase() === 'usd' ? '$' : '₹'}
									{numberWithCommas(tokenDetails?.current_price?.toFixed(2))}
								</h2>
							</div>
							{/* Market Price */}
							<div className="ml-[8rem] lg:ml-[5rem]">
								<span className="text-[#5b616e] text-[4rem] lg:text-[1.6rem] bold">
									Market Cap
								</span>
								<h2 className="text-[5.8rem] lg:text-[4rem] text-[#555]">
									{currency.toLowerCase() === 'usd' ? '$' : '₹'}
									{numberWithCommas(
										tokenDetails?.market_cap.toString().slice(0, -6)
									)}
								</h2>
							</div>
							{/* 24 hour change */}
							<div className="ml-[8rem] lg:ml-[5rem]">
								<span className="text-[#5b616e] text-[4rem] lg:text-[1.6rem] bold">
									24h Change
								</span>
								<h2
									className={`text-[5.8rem] lg:text-[4rem] regular ${
										tokenDetails?.price_change_percentage_24h > 0
											? 'text-[#00FFA3]'
											: 'text-[#FF3D00]'
									}`}
								>
									{tokenDetails?.price_change_percentage_24h > 0 && '+'}
									{tokenDetails?.price_change_percentage_24h?.toFixed(2)}%
								</h2>
							</div>
						</div>
					</div>

					<Line
						data={{
							labels: historicData?.map((coin) => {
								let date = new Date(coin[0])
								let time =
									date.getHours() > 12
										? `${date.getHours() - 12}:${date.getMinutes()} PM`
										: `${date.getHours()}:${date.getMinutes()} AM`
								return days === 1 ? time : date.toLocaleDateString()
							}),

							datasets: [
								{
									data: historicData?.map((coin) => coin[1]),
									label: `Price ( Past ${days} Days ) in ${currency}`,
									borderColor: '#B3B9EB',
								},
							],
						}}
						options={{
							elements: {
								point: {
									radius: 1,
								},
							},
						}}
					/>
				</div>
			)}
		</>
	)
}

// const tokenDetails = {
// 	image: '/static/crypto-btc.png',
// 	name: 'Bitcoin',
// 	symbol: 'btc',
// 	current_price: 29396,
// 	market_cap: 569092049292,
// 	price_change_percentage_24h: 0.73044,
// }

export default TokenDetailsPage
