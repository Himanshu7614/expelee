import React from 'react'
import { motion } from 'framer-motion'
import PrimaryButton from '../PrimaryButton'

function Webdevbanner() {
  return (
    <div className='px-[5rem]'>
        <div className="mt-[20rem] lg:mt-[15rem] flex lg:flex-row flex-col sm:px-[0rem] lg:gap-[4rem] gap-8">
			<div className="flex-1 flex justify-start lg:items-center gap-2 lg:pt-4">
                <div className='flex flex-col gap-2'>				
                {/* <h4 className="flex  bold gradient justify-start text-[6rem] lg:text-[2rem]">
                Who we work with ?
				</h4> */}
				<h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0rem] ">
				Your Vision, Our Code Building Modern and Responsive Websites.
				</h2>
                <p className='w-[90%] regular text-[6rem] lg:text-[1.8rem] text-[#33373f] mb-[2.6rem] mt-[2rem]'>
				Our web development magic will give your business a turbo-charged boost, taking it from local gem to global phenomenon. Say hello to more customers, more sales, and more high-fives. Its time to rock the web and roll in the profits!
                </p>
                <PrimaryButton text={'Read More'} classes="bold text-[4rem] lg:text-[2rem] mt-[3rem] lg:mt-[0rem] uppercase w-[50%] p-0"  />
                </div>

			</div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 },
				}}
				className="flex items-center relative"
			>
				<img
					className="w-[120rem] lg:w-[60rem] mt-[10rem] lg:mt-0 absolute top-0 p-32 blur-2xl"
					src="/static/team-bg.png"
					alt="About Image"
				/>

				<img
					className="w-[120rem] lg:w-[60rem] mt-[10rem] lg:mt-0"
					src="/static/main-web.png"
					alt="About Image"
				/>
			</motion.div>			
		</div>
    </div>
  )
}

export default Webdevbanner