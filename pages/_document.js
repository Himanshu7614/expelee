import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import loader from '../components/loader'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<head>
					<link
						rel="preload"
						href="/static/font/sf-pro-display-cufonfonts/SFPRODISPLAYBOLD.OTF"
						as="font"
						crossOrigin=""
						type="font/OTF"
					/>
					<link
						rel="preload"
						href="/static/font/sf-pro-display-cufonfonts/SFPRODISPLAYMEDIUM.OTF"
						as="font"
						crossOrigin=""
						type="font/OTF"
					/>
					<link
						rel="preload"
						href="/static/font/sf-pro-display-cufonfonts/SFPRODISPLAYREGULAR.OTF"
						as="font"
						crossOrigin=""
						type="font/OTF"
					/>
					<style>{loader}</style>
				</head>
				<body>
					<div id={'globalLoader'}>
						{/* <div className="loader">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div> */}
					<img
							className="w-[26rem] lg:w-[11.7rem] lg:h-[4.4rem]"
							src="/static/logo.svg"
							alt="Expelee Logo"
						/>
					</div>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
