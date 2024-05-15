import React from 'react';
import style from "./Card.module.css";
import {NavLink} from "react-router-dom"


const Card = ({id, name, flag_img, continent}) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <div className={style.divCard}>
        <div className={style.divTop}>
          <div className={style.divImg}>
            <img className={style.imgCard} src={flag_img} alt="Country" />
          </div>
          <div className={style.divTitles}>
            <h4 className={style.title}>{name}</h4>
            <h6 className={style.subtitle}>Continent: {continent}</h6>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default Card
