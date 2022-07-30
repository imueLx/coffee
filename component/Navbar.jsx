import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux"
import Link from "next/link"


const Navbar = () => {
const quantity = useSelector(state=>state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.craveButton}>
          <Image src="/img/cravekaps.png" alt="" width="50" height="50"/>
    </div>
      <div className={styles.texts}>
        <div className={styles.logotext}>Crave.Kape</div>
      </div>
    </div>
    
      <div className={styles.item}>
          <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/products" passHref>
            <li className={styles.listItem}>Products</li> 
          </Link>
          <Link href="/feedbacks" passHref>
            <li className={styles.listItem}>Feedbacks</li>
          </Link>
          <Link href="/contact" passHref>
            <li className={styles.listItem}>Contact Us</li>
          </Link>
          </ul>

      </div>
      <Link href="/cart" passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart2.png" alt="" width="32" height="32" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Navbar
