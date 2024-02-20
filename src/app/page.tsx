import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header/page"
import Footer from "../components/footer/page"
import Home from "../components/home/page"


const page = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default page

