import Brands from '../components/Brands'
import ContactForm from '../components/ContactForm'
import Records from '../components/Records'

const { Fragment } = require('react')

const Contact = () => {
	return (
		<Fragment>
			<div className="mt-[20rem] lg:mt-[1rem]  mx-auto w-[90%] lg:w-[50%]">
				<h4 className=" bold gradient text-center text-[6rem] lg:text-[2rem]">
					Contact Us
				</h4>
				<h2 className="bold text-[9rem] text-center lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
					Contact Us
				</h2>
				<p className="regular text-center text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
					On the way to develop our Blockchain Ecosystem, this is the roadmap we
					will be following in our journey.
				</p>
			</div>
			<div className="mt-[8rem] px-[7rem] lg:mt-[5rem] lg:px-[0rem]">
				<div className="flex lg:flex-row flex-col-reverse gap-[4rem] lg:gap-0 ">
					<div className="bg-white flex-1 ">
						<img className="h-[100%]" src="/static/dubai-map.png" alt=""/>
					</div>
					<div className="flex-1">
						<ContactForm />
					</div>
				</div>
			</div>
			{/* <Brands /> */}
			<Records />
		</Fragment>
	)
}

export default Contact
