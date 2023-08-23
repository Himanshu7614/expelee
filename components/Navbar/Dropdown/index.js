import React from 'react'
import styles from '../Navbar.module.css'
import Link from "next/link"

const Dropdown = ({selectedData, handleMenuSelect}) => {
  const {heading, title, description, menus} = selectedData;
  return (
    <div className={`${styles.dropdown}  fixed top-[6.2rem] w-[100%] mx-auto flex gap-[12rem] py-[5rem] px-[22rem]  h-[28rem] z-10`}
    onMouseLeave={() => handleMenuSelect(null)
    }
    >
       <div className='flex w-[120rem] mx-auto gap-[12rem]   z-10'>
       <div className='flex-1 max-w-[35%]'>
            <h2 className='medium text-[3rem] font-medium'>{heading}</h2>
            <p className="my-[1.3rem] regular  text-[black]  text-[1.5rem]">
           {description}
			</p>
        </div>
        <div className='flex-1'>
          <h4 className="medium  text-[#020202] text-[2rem]">
						{title}
					</h4>
          <div className='mt-[1rem] grid grid-cols-2 gap-2'>
            {menus?.map((menu, index) => (
              <div key={index} className=''>
                <Link href={menu.link}  onClick={()=>handleMenuSelect(null)}>
                <h4 className='link regular text-[1.7rem]'>{menu?.label}</h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
       </div>
    </div>
  )
}

export default Dropdown