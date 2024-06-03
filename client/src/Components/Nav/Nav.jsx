

import { NavLink } from "react-router-dom";
import style from "../Nav/Nav.module.css"


const Nav = () => {
  return (
    <div >
        
    <NavLink className={style.countries} to="/home"></NavLink>
   
    </div>
  )
}

export default Nav;