import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import NextNProgress from 'nextjs-progressbar'
import _ from 'lodash'
import styles from './CryptoPriceTable.module.css'

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const CryptoPriceTable = ({
	tokens,
	handleSearch,
	currency,
	loading,
	handleLoading,
}) => {
	const router = useRouter()

	// =============================
	// ======== Pagination Logic ======
	const [currentPage, setCurrentPage] = useState(1)
	const perPage = 10
	const totalPages = Math.ceil(tokens.length / perPage)

	const startIndex = (currentPage - 1) * perPage
	const endIndex = startIndex + perPage
	const tokensPerPage = tokens.slice(startIndex, endIndex)
	// ===============
	// ===================

	return (
		<>
			<table className={`${styles.table} w-[118rem] lg:w-[134rem] mx-auto`}>
				<thead>
					<tr className="regular lg:bold w-full h-[9rem] lg:h-[7.4rem] text-[3rem] lg:text-[1.7rem] text-[#5B616E] text-left border-b-[1px] border-[rgba(91, 97, 110, 0.17)]">
						<th className="px-[5.2rem] regular">Coin</th>
						<th className="px-[5.2rem] regular">Price</th>
						<th className="px-[5.2rem] regular">24h Change</th>
						<th className="px-[5.2rem] regular">Market Cap</th>
					</tr>
				</thead>
				<tbody>
					{handleSearch(tokens)
						.slice(
							(currentPage - 1) * perPage,
							(currentPage - 1) * perPage + perPage
						)
						.map((token) => {
							const profit = token.price_change_percentage_24h > 0
							const profitColor =
								profit > 0 ? 'text-[#00FFA3]' : 'text-[#FF3D00]'
							return (
								<tr
									key={token.id}
									onClick={() => router.push(`/expe-crypto-hunter/${token.id}`)}
									className="h-[15rem] lg:h-[7.8rem] border-[rgba(91, 97, 110, 0.17)] border-b-[1px] border-[rgba(91, 97, 110, 0.17)] py-[1.3rem] cursor-pointer"
								>
									<td>
										<div className="flex items-center px-[5.2rem]">
											<div className="relative w-[6.8rem] h-[6.8rem] lg:w-[4.8rem] lg:h-[4.8rem] inline-block">
												<Image src={token?.image} alt={token?.name} fill />
											</div>
											<div className="flex flex-col ml-[2rem]">
												<span className="medium text-[#5B616E] text-[2.7rem] lg:text-[1.7rem]">
													{token?.symbol.toUpperCase()}
												</span>
												<span className="medium text-[#020202] text-[2.7rem] lg:text-[1.7rem]">
													{token?.name}
												</span>
											</div>
										</div>
									</td>
									<td className="px-[5.2rem] text-[#5B616E] text-[3rem] lg:text-[1.7rem]">
										{currency.toLowerCase() === 'usd' ? '$' : '₹'}
										{numberWithCommas(token?.current_price.toFixed(2))}
									</td>
									<td
										className={`px-[5.2rem] text-[3rem] lg:text-[1.7rem] ${profitColor}`}
									>
										{profit && '+'}
										{token.price_change_percentage_24h.toFixed(2)}%
									</td>
									<td className="px-[5.2rem] text-[#5B616E] text-[3rem] lg:text-[1.7rem]">
										{currency.toLowerCase() === 'usd' ? '$' : '₹'}
										{numberWithCommas(token.market_cap.toString().slice(0, -6))}
										M
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
			<div className="mt-[8rem] lg:mt-[4.1rem] flex justify-center items-center cursor-pointer">
				<img
					src="/static/pagination-left.svg"
					className="w-[30px] lg:w-[11.78px] mr-[2.1rem]"
					alt=""
				/>
				{Array.from({ length: tokens.length / 10 }, (_, i) => {
					const pageNumber = i + 1
					return (
						<span
							key={i}
							onClick={() => {
								setCurrentPage(pageNumber)
								window.scroll(0, 350)
							}}
							className={`text-[5rem] lg:text-[2rem] mr-[4rem] lg:mr-[1.6rem] bold text-[${
								pageNumber === currentPage ? '#4869e8' : '#555'
							}]`}
						>
							{pageNumber}
						</span>
					)
				})}
				<img
					src="/static/pagination-right.svg"
					className="w-[30px] lg:w-[11.78px] ml-[5px]"
					alt=""
				/>
			</div>
		</>
	)
}

export default CryptoPriceTable
