import React, { useState, useEffect } from 'react'
import styles from '../Navbar.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { dropdownData } from '../../../constants';

const MobileDropDown = ({setToogle}) => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedData, setSelectedData] = useState(null);
    const router = useRouter();
	const path = router.pathname

    const handleMenuSelect = (menu) => {
        if (menu === selectedMenu) {
			setSelectedMenu(null)
			setSelectedData(null)
		} else {
			setSelectedMenu(menu)
		}
    }

    useEffect(() => {
		if (path !== '/') {
			setSelectedMenu(null)
		}
	}, [path])

    useEffect(() => {
		if (selectedMenu) {
			const selectedData = dropdownData.filter((item) => item.fieldName === selectedMenu)[0];
			setSelectedData(selectedData?.menus)
		}
	}, [selectedMenu])

    const handleHomeSelect = (data) => {
        handleMenuSelect(data);
        setToogle(false)
        if(data = 'home' ){
            let inputs = document.getElementById('burger');
			inputs.checked = false;  
        }
    }

    const InnerMenu = ({menus}) => (
        <div className='px-[4rem] py-[3rem] bg-[white]  rounded-[12px]  w-[120rem] h-[100%]'>
           {menus?.map((menu, index) => (
              <div key={index} className=''>
                <Link href={menu.link}>
                <h4 className='link medium text-[5.8rem]'>{menu?.label}</h4>
                </Link>
              </div>
            ))} 
        </div>
    )

     return (
    <div className={`${styles.dropdownMobile} w-full pb-[5rem] lg:hidden mt-[16rem] fixed top-[0rem] z-10`}>
        <ul className='flex flex-col px-[5rem] py-[1rem] gap-[3rem]'>
            <li className={selectedMenu === 'home' ? `text-[6rem] text-[#4869e8] medium link flex items-center gap-[3rem]` : `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>handleHomeSelect('home')}>
            <Link href={'/'}>Home</Link>
            </li>
            <li className={selectedMenu === 'services' ? `text-[6rem] text-[#4869e8] medium link flex items-center gap-[3rem]` : `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>handleMenuSelect('services')}>
                <span>Services</span>
				<img alt="" className='items-center w-[3rem] h-[3rem]' src={selectedMenu === 'services' ? `/static/menuUpArrow.svg` : `/static/icon-navArrowDown.svg`} />
            </li>
            {selectedMenu === 'services' && <InnerMenu menus={selectedData} />}
            <li className={selectedMenu === 'products' ? `text-[6rem] text-[#4869e8] medium link flex items-center gap-[3rem]` : `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>handleMenuSelect('products')}>
                <span>Solutions</span>
				<img alt="" className='items-center w-[3rem] h-[3rem]' src={selectedMenu === 'products' ? `/static/menuUpArrow.svg` : `/static/icon-navArrowDown.svg`} />
            </li>
            {selectedMenu === 'products' && <InnerMenu menus={selectedData} />}
            <li className={selectedMenu === 'about' ? `text-[6rem] text-[#4869e8] medium link flex items-center gap-[3rem]` : `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>handleMenuSelect('about')}>
                <span>Company</span>
				<img alt="" className='items-center w-[3rem] h-[3rem]' src={selectedMenu === 'about' ? `/static/menuUpArrow.svg` : `/static/icon-navArrowDown.svg`}  />
            </li>
            {selectedMenu === 'about' && <InnerMenu menus={selectedData} />}
            <li className={selectedMenu === 'resource' ? `text-[6rem] text-[#4869e8] medium link flex items-center gap-[3rem]` : `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>handleMenuSelect('resource')}>
                <span>Resources</span>
				<img alt="" className='items-center w-[3rem] h-[3rem]' src={selectedMenu === 'resource' ? `/static/menuUpArrow.svg` : `/static/icon-navArrowDown.svg`} />
            </li>
            {selectedMenu === 'resource' && <InnerMenu menus={selectedData} />}
            <li className={selectedMenu === 'contact' ? `text-[6rem] text-[#4869e8] medium link flex items-center gap-[3rem]` : `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>handleMenuSelect('contact')}>
            <Link href={'/contact'}>Contact</Link>
            </li>
        </ul>

    </div>
  )
}

export default MobileDropDown