import { useRouter } from 'next/router'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import slugToName from '../utils/slugToName'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const AuditPage = () => {
	const router = useRouter()
	const { name } = router?.query
	const auditOf = slugToName(name)

	const defaultLayoutPluginInstance = defaultLayoutPlugin()
	return (
		<div className="mt-[20rem] lg:mt-[10rem] mx-auto">
			<h4 className=" bold gradient text-center text-[6rem] lg:text-[2rem]">
				Audit Report
			</h4>
			<h2 className="bold text-[9rem] text-center lg:text-[5rem]">
				{auditOf ?? ''}
			</h2>
			<button
				className="text-[4.5rem] lg:text-[1.8rem] medium mb-[8rem] lg:mb-[4rem] gradient"
				onClick={() => router.back()}
			>
				&larr; Go Back
			</button>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
				<div className="h-[75rem]">
					{name && defaultLayoutPluginInstance && (
						<Viewer
							fileUrl={`/static/audit-reports/${name}-audit-report.pdf`}
							plugins={[defaultLayoutPluginInstance]}
						/>
					)}
				</div>
			</Worker>
		</div>
	)
}

export default AuditPage
