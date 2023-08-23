import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Brands from '../../components/Brands'
import caseStudies from '../../data/case-studies'


const CaseStudiesDetail = () => {
    const router = useRouter()
    const { caseStudyId } = router.query
    const [caseStudyData, setCaseStudyData] = useState([])

    useEffect(() => {
        const data = caseStudies?.filter((item) => item.id === Number(caseStudyId))
        setCaseStudyData(data)
    }, [])

    return (
        <>
            {caseStudyData?.length && (
                <div className="mt-[15rem] lg:mt-[10rem] lg:px-0 px-[2rem]">
                    <div className="mt-[25rem] lg:mt-[9rem]  mx-auto w-[90%] lg:w-[90%] ">

                        <h4 className="bold gradient text-center  text-[5rem] lg:text-[2rem]">
                            Case Study
                        </h4>
                        <button
                            className="text-[4.5rem] lg:text-[1.8rem] medium mb-[8rem] lg:mb-[1rem] gradient"
                            onClick={() => router.back()}
                        >
                            &larr; Go Back
                        </button>
                        <h2 className="bold text-[9rem] text-center lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                            {caseStudyData[0].title}
                        </h2>
                        <img src={caseStudyData[0].images[1]} className='mt-[2rem] lg:w-[60rem] lg:h-[60rem] mx-auto' />
                       {
                        caseStudyData[0].description?.map((des,index) => (
                            <p key={index} className="regular text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mt-[3rem]">
                            {des}
                        </p>
                        ))
                       }
                    </div>
                    <div className="flex flex-1 gap-[3rem] px-[5rem] lg:px-[0rem] lg:w-[50%] lg:gap-[2rem] mt-[15rem] lg:mt-[10rem]  self-center">
                        <div className='flex'>
                            <img
                                className="rounded-[100%] w-[130px] h-[130px] lg:w-[74px] lg:h-[74px]"
                                src={caseStudyData[0].images[0]}
                                alt="caseStudy1"
                            />
                        </div>
                        <div className='flex-1 '>
                            <h4 className="flex bold gradient lg:justify-start text-[6rem] lg:text-[2rem]">About</h4>

                            <h2 className="lg:leading-[4rem] bold text-[7rem] lg:text-[4rem] mt-[0.7rem]">
                                Project Highlights
                            </h2>
                        </div>
                    </div>
                    <div className="ml-[5rem] lg:ml-0 mt-[11rem] px-[9rem] lg:mt-[10rem] grid lg:grid-cols-2 gap-[3rem] gap-x-[4rem]">
                        {caseStudyData[0].projectInsights?.map((item, index) => (
                            <div key={index} className="flex gap-[1rem]">
                                <div>
                                    <p className="bold text-[6rem] lg:text-[2rem]">{index + 1}.</p>
                                </div>
                                <div className="pr-[5rem]">
                                    <h4 className="bold  text-[6rem] lg:text-[2rem]">{item.category}</h4>
                                    <p className="regular  text-[6rem] lg:text-[1.5rem]">{item.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <Brands /> */}
                </div>
            )}
        </>
    )
}

export default CaseStudiesDetail