
const NewsLetter = () => {
  return (
    <section className='mt-[15rem] lg:mt-[10]rem flex justify-center'>
        <div className=''>
          <h3
            className={`text-[9rem] lg:text-[5rem] bold tracking-wide text-center`}
          >
            Subscribe to Newsletter
          </h3>
          <p className='regular text-[#5C5C5C] text-[6rem] lg:text-[1.8rem] my-[1.8rem] text-center px-[4.5rem]'>
          Subscribe to get latest updates and news. 
          </p>
          <form className='mt-[5rem] lg:mt-[0rem] justify-center lg:ml-[4.2em] flex h-[13rem]  lg:w-[54.6rem] lg:h-[6rem]'>
            <input
              type='text'
              placeholder='Your Email Address'
              className='w-[58rem] lg:w-[38.8rem] h-full bg-[#f5f5f5] placeholder:text-[4rem] lg:placeholder:text-[1.8rem] placeholder:font-light px-[2.4rem] py-[1.7rem] outline-none font-light text-[1.8rem] focus:bg-[#f0f0f0]'
            />
            <input
              type='submit'
              value={'SUBSCRIBE'}
              className='w-[25rem] lg:w-[15.8rem] bg-dark text-white text-[2.5rem] lg:text-[1.8rem] flex justify-center items-center font-semibold cursor-pointer bg-[#2F2E2E]'
            />
          </form>
        </div>
      </section>
  )
}

export default NewsLetter