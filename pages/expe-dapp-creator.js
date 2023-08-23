import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import Brands from '../components/Brands'
import Link from 'next/link'

const ExpeDappCreator = () => {
  return (
    <div>
      <div className=' flex lg:flex-row flex-col'>
        <div className='lg:pt-[15rem] pt-[20rem] px-[8rem] lg:px-0 lg:w-[50%] '>
          <h4 className=" bold gradient justify-center lg:justify-start text-[6rem] lg:text-[2rem]">dApp Creator</h4>
          <h2 className="bold text-[9rem] lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
            What are dApps ?
          </h2>
          <p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
            Decentralized applications (dApps) are digital programs that run on decentralized network (blockchains or other distributed ledgers) via smart contracts. They are similar to apps found on laptops and smartphones but keep users data outside the control of the organizations behind it using blockchain technology.
          </p>
          <p className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
            At Expelee, we deploy blockchain technology to help firms safeguard uses data and promote efficiency using large numbers of active computers called nodes. These computers are owned by the blockchain users and not by the developers or owners of the dApp which demonstrate full decentralization and ownership. We have built DApps forgaming, fintech, supply chain and different sectors or industries.
          </p>
          <div className="mt-[3.6rem]">
          <Link href={'https://t.me/Ritz_Expelee'}>
          <PrimaryButton text={'Contact Us'} />
          </Link>
          </div>

        </div>
        <img className='mt-[15rem] lg:w-[30rem] w-[70rem] ml-[30rem] my-[10rem] lg:ml-[22rem] lg:px-0 px-[5rem]' src="/dApps.png" />

      </div>
      <div className="flex flex-1 gap-[3rem] px-[5rem] lg:px-[0rem] lg:w-[60%] lg:gap-[2rem] mt-[15rem] lg:mt-[10rem]  self-center">
        <div className='flex'>
          <img
            className="rounded-[100%] w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
            src={'/static/smartContract/token.png'}
            alt="caseStudy1"
          />
        </div>
        <div className='flex-1 '>
          <h4 className="flex bold gradient lg:justify-start text-[5rem] lg:text-[2rem]">Our Process</h4>

          <h2 className="lg:leading-[4rem] bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
            How Do We Create Successful dApps at Expelee? (Five Steps)
          </h2>
        </div>
      </div>
      <div className="ml-[5rem] lg:ml-0 mt-[11rem] px-[9rem] lg:mt-[10rem] grid lg:grid-cols-2 gap-[3rem] gap-x-[4rem]">
        {dAppProcessData?.map((item, index) => (
          <div key={index} className="flex gap-[1rem]">
            <div>
              <p className="bold text-[5rem] lg:text-[2rem]">{index + 1}.</p>
            </div>
            <div className="pr-[5rem]">
              <h4 className="bold  text-[6rem] lg:text-[2rem]">{item.title}</h4>
              <p className="regular  text-[6rem] lg:text-[1.5rem]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-[10rem] flex justify-center">
        <PrimaryButton text={'Contact us'} />
      </div>
      {/* <Brands /> */}
    </div>
  )
}

const dAppProcessData = [
  {
    title: 'We Develop Smart Contract',
    description: 'Smart contracts harbor the decentralized logic or the executive features of the dApp.'
  },
  {
    title: 'We Build the Front-ends',
    description: 'This includes the normal web or user-facing apps similar to other popular apps in use.'
  },
  {
    title: 'We Design a Centralized Back-end',
    description: 'Ethereum dApps, for instance, require large data storage. Building one may require a web solution on a private server.'
  },
  {
    title: 'We Test-run',
    description: 'Early quality testing helps you to fix any issues on time. At times, it is called beta-testing'
  },
  {
    title: 'Deploy',
    description: 'We upload the mobile apps to Google Play and/or the App stor, and schedule for regular maintenance.'
  }
]

export default ExpeDappCreator