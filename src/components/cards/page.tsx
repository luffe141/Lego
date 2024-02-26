import React from "react";
import style from "./page.module.css";

type Card = {
  name: string;
  img: string;
  description: string;
};

const page = () => {
  let cards: { [key: string]: Card } = {};
  try {
    cards = require("../../../public/JSON/card.json").cards;
  } catch (error) {
    console.error("Error loading cards:", error);
  }

  return (
    <>
      <div className={style.cardContainer}>
        {Object.entries(cards).map(([key, value]) => (
          <div key={key} className={style.card}>
            <h2 className={style.cardH2}>{value.name}</h2>
            <img className={style.cardImg} src={value.img} alt={value.name} />

            <p className={style.cardP}>{value.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
