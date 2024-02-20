import React from "react";
import style from "./page.module.css";
const page = () => {
  return (
    <>
    <hr />
      {" "}
      <section className={style.heroSection}>
        <img className={style.heroImage} src="/img/Hero.jpg" alt="Hero Image" />
      </section>

    <hr />

    
    </>
  );
};

export default page;
