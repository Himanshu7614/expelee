/* eslint-disable @next/next/no-img-element */
import Navbar from '../components/Navbar'
import Records from '../components/Records'
import Footer from '../components/Footer'
import Container from '../components/Container'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import NProgress from 'nextjs-progressbar'
import { useEffect } from 'react'
import Social from '../components/Social'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('globalLoader')
			if (loader) loader.style.display = 'none'
		}
	}, [])
	return (
		<>
			<Navbar />
			<Social />
			<Container>
				<main>
					<NextNProgress
						color="#4869e8"
						startPosition={0.3}
						stopDelayMs={200}
						height={5}
						showOnShallow={true}
						options={{ showSpinner: false }}
					/>
					<Component {...pageProps} />
				</main>
				<Footer />
			</Container>
		</>
	)
}

export default MyApp
