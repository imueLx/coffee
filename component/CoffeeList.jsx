import React from 'react'
import styles from  "../styles/CoffeeList.module.css"
import CoffeeCard from './CoffeeCard'

const CoffeeList = ({coffeeList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title} > Best Coffee</h1>
        <p className={styles.desc}>
            Satisfy your Cravings, Order now.
        </p>
        <div className={styles.wrapper}>
            {coffeeList.map((coffee) =>(
              <CoffeeCard key={coffee._id} coffee={coffee}/>
            ))}
            
           
        </div>
    </div>
  )
}

export default CoffeeList