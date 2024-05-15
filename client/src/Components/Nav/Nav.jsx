import { NavLink } from "react-router-dom";
import style from "../Nav/Nav.module.css"
import linkedin from "../img/linkedin.png"
import github from "../img/github.png"

const Nav = () => {
  return (
    <div className={style.barra}>
        
    <NavLink className={style.countries} to="/home">Countries PI</NavLink>
    <NavLink className={style.select} to="/">Exit</NavLink> 
    <NavLink className={style.select} to="/form">Create Activity</NavLink>
    <a
        href=""
        target="_blank"
        rel="noreferrer"
        className={style.alink}
      >
        <img src={linkedin} alt="linkedin" className={style.img} />
      </a> 
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className={style.alink}
      >
        <img src={github} alt="github" className={style.img} />
      </a> 
</div>
  )
}

export default Nav;
