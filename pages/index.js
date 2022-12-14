import axios from "axios";
import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import Add from "../component/Add";
import AddButton from "../component/AddButton";
import CoffeeList from '../component/CoffeeList';
import Featured from '../component/Featured';
import styles from '../styles/Home.module.css'

export default function Home({coffeeList, admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Crave.Kape</title>
        <meta name="description" content="Best Brewed Coffee for less" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
      <CoffeeList coffeeList={coffeeList}/>
      {!close && <Add setClose={setClose}/>}
    </div>
  );
}

export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN){
    admin = true
  }

  const res = await axios.get("http://coffee-plum.vercel.app/api/products");
  return {
    props:{
      coffeeList: res.data,
      admin
    }
  }
}; 
