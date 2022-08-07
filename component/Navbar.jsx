import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux"
import React, { useState } from 'react'
import Link from "next/link"
import NavItem from './NavItem'

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Products", href: "/products" },
  { text: "Feedbacks", href: "/feedbacks" },
  { text: "Contact Us", href: "/contact" },
];

const Navbar = () => {

const [navActive, setNavActive] = useState (null);
const [activeIdx, setActiveIdx] = useState(-1)

const quantity = useSelector(state=>state.cart.quantity)


  return (
    <header>
      <nav className={styles.nav}>
      <div
        onClick={() => setNavActive(!navActive)}
        className={styles.nav__menuBar}
      >
        <div></div>
        <div></div>
        <div></div>

      </div>
      <Link href={"/"}>
        <a>
          <h1 className={styles.logo}>Crave.Kape</h1>
        </a>
      </Link>
      <div className={`${navActive ? "active" : ""} nav__menu-list`}>
        {MENU_LIST.map((menu, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>

        <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/img/cart2.png" alt="" width="32" height="32" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
      </nav>  
    </header>
  )
}

export default Navbar
