import style from "./Landing.module.css"
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import rosadelosvientos from "../img/Rosadelosvientos2.png"
import { NavLink } from "react-router-dom";



const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.shadow}>
        <div className={style.topLeft} >
          <a
            href="https://www.linkedin.com/in/alexander-montenegro/"
            target="_blank"
            rel="noreferrer"
            className={style.alink}
          >
            <img src={linkedin} alt="linkedin" className={style.img} />
          </a>
          <a
            href="https://github.com/AlexanderMontenegro"
            target="_blank"
            rel="noreferrer"
            className={style.alink}
          >
            <img src={github} alt="github" className={style.img} />
          </a>
        </div>

        <div className={style.text}>

       

          <div className={style.textBig}>
            <h1>COUNTRIES</h1>
          </div>

          <div className={style.imagen}>
            <NavLink to="/home"> <img className={style.rosa} src={rosadelosvientos} alt="start" /> </NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Landing;