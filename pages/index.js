import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [location, setLocation] = useState("");
  useEffect(()=>{
    setLocation(window.location.href);
  },[])
  return (
    <h1>{location}</h1>
  )
}
