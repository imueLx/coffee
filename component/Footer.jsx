import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
           
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>
              SATISFY YOUR CRAVINGS
            </h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR COFFEESHOP</h1>
            <p className={styles.text}>
              Blk 1 Lot 1
              <br/>Almanza Uno, 1750
              <br/>0920 840 4116
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>  
            <p className={styles.text}>
              MONDAY - SATURDAY
              <br/> 7:00AM - 10:00PM
            </p>
            <p className={styles.text}>
              SUNDAY CLOSED
            </p>
          </div> 
        </div>
    </div>
  )
}

export default Footer