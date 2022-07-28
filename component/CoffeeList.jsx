import React from 'react'
import styles from  "../styles/CoffeeList.module.css"
import CoffeeCard from './CoffeeCard'

const CoffeeList = ({coffeeList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title} > Best Coffee</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere qui, aut, quae expedita vitae odio cum ea eos quis repudiandae aperiam? Accusantium soluta totam sequi consectetur mollitia inventore debitis.
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