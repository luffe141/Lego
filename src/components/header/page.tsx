import Link from "next/link";
import React from "react";
import style from "./page.module.css";

const page = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.uList}>
        <li>
          <Link className={style.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={style.link} href={"/"}>
            About
          </Link>
        </li>
        <li>
          <Link className={style.link} href={"/"}>
            Services
          </Link>
        </li>
        <li>
          <Link className={style.link} href={"/"}>
            Contact
          </Link>
        </li>

        <li>
          <Link className={style.link} href="/Enviroment/page">
            Build
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default page;
