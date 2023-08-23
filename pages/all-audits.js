import audits from '../data/audits'
import AuditCard from '../components/AuditCard'

const AuditsPage = () => {
	return (
		<div className="mt-[15rem] lg:mt-[10rem] lg:px-0 px-[10rem]">
			<div className="mb-[4.6rem]">
				<h4 className="flex justify-center bold gradient text-[6rem] lg:text-[2rem] mb-[-30px] lg:mb-[0px]">
					All Audits
				</h4>
				<h2 className="flex justify-center bold text-[9rem] lg:text-[5rem]">
					All Audit Reports
				</h2>
			</div>
			<div className="flex mt-[10rem] flex-col items-center lg:flex-row gap-[6.7rem]">
				{audits?.map((item) => (
					<AuditCard
						key={item.id}
						image={item.image}
						text={item.text}
						name={item.name}
						date={item.date}
						slug={item.slug}
					/>
				))}
			</div>
		</div>
	)
}

const row = [1, 2, 3, 4]
const rows = [5, 6, 7, 8]

export default AuditsPage
