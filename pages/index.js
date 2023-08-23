import Showcase from '../components/Showcase'
import ServiceList from '../components/ServiceList'
import Brands from '../components/Brands'
import About from '../components/AboutUs'
import WhoAreWe from '../components/WhoAreWe'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import Blogs from '../components/Blogs'
import InfoText from '../components/InfoText'
import Records from '../components/Records'

const HomePage = () => {
	return (
		<>
			<Showcase />
			<ServiceList />
			<Brands />
			<About />
			<WhoAreWe />
			<CaseStudies />
			<Testimonials />
			{/* <NewsLetter /> */}
			<Blogs />
			<InfoText />
			<Records />
		</>
	)
}
export default HomePage
