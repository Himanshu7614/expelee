import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
// import SecondaryButton from '../SecondaryButton'
import styles from "./Navbar.module.css";
import { Fragment, useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileDropDown from "./MobileDropdown";
import { motion } from "framer-motion";
import { dropdownData } from "../../constants";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [toogle, setToogle] = useState(false);
  const router = useRouter();
  const path = router.pathname;

  const handleMenuSelect = (menu) => {
    if (menu === selectedMenu) {
      setSelectedMenu(null);
      setSelectedData(null);
    } else {
      setSelectedMenu(menu);
    }
  };

  useEffect(() => {
    if (selectedMenu) {
      const selectedData = dropdownData.filter(
        (item) => item.fieldName === selectedMenu
      )[0];
      setSelectedData(selectedData);
    }
  }, [selectedMenu]);

  useEffect(() => {
    if (path !== "/") {
      setSelectedMenu(null);
      setToogle(false);
      let inputs = document.getElementById("burger");
      inputs.checked = false;
    }
  }, [path]);
  //px-[3.6rem] lg:px-[15rem]
  return (
    <Fragment>
      <nav
        className={`${styles.navbar}  w-full h-[16rem] lg:h-[6.2rem] flex justify-center items-center py-[20px] z-50`}
      >
        <div className="flex w-[120rem] justify-between items-center py-[9px]">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <Link href={"/"}>
              <img
                className="w-[26rem] lg:w-[11.7rem] lg:h-[4.4rem]"
                src="/static/logo.svg"
                alt="Expelee Logo"
              />
            </Link>
          </motion.div>
          <ul className="hidden lg:flex align-middle medium">
            <li className="link" onClick={() => setSelectedMenu(null)}>
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={
                selectedMenu === "services" ? `link text-[#4869e8]` : `link`
              }
              onMouseEnter={() => handleMenuSelect("services")}
            >
              <span>Services</span>
              <img
                alt=""
                src={
                  selectedMenu === "services"
                    ? `/static/menuUpArrow.svg`
                    : `/static/icon-navArrowDown.svg`
                }
              />
            </li>
            <li
              className={
                selectedMenu === "products" ? `link text-[#4869e8]` : `link`
              }
              onMouseEnter={() => handleMenuSelect("products")}
            >
              <span>Solutions</span>
              <img
                alt=""
                src={
                  selectedMenu === "products"
                    ? `/static/menuUpArrow.svg`
                    : `/static/icon-navArrowDown.svg`
                }
              />
            </li>
            <li
              className={
                selectedMenu === "about" ? `link text-[#4869e8]` : `link`
              }
              onMouseEnter={() => handleMenuSelect("about")}
            >
              <span>Company</span>
              <img
                alt=""
                src={
                  selectedMenu === "about"
                    ? `/static/menuUpArrow.svg`
                    : `/static/icon-navArrowDown.svg`
                }
              />
            </li>
            <li
              className={
                selectedMenu === "resource" ? `link text-[#4869e8]` : `link`
              }
              onMouseEnter={() => handleMenuSelect("resource")}
            >
              <span>Resources</span>
              <img
                alt=""
                src={
                  selectedMenu === "resource"
                    ? `/static/menuUpArrow.svg`
                    : `/static/icon-navArrowDown.svg`
                }
              />
            </li>

            <li className="link">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="hidden lg:block"
          >
            <Link href={"https://t.me/Ritz_Expelee"}>
              <PrimaryButton text="Get Started" />
            </Link>
          </motion.div>
          <label className={`${styles.burger} lg:hidden`} htmlFor="burger">
            <input
              type="checkbox"
              id="burger"
              onClick={() => setToogle((currentValue) => !currentValue)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </nav>
      {selectedMenu && selectedData && (
        <Dropdown
          setSelectedMenu={setSelectedMenu}
          selectedData={selectedData}
          handleMenuSelect={handleMenuSelect}
        />
      )}
      {toogle && <MobileDropDown setToogle={setToogle} />}
    </Fragment>
  );
};

export default Navbar;
