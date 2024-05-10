import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { searchPais} from "../../Redux/Actions/actions";


const Searchbar = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState("");

    

    const handleChange = (e) =>{
        setState(e.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchPais(state));
    }



  return (
    <div>
     <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                <input type="submit" value="Search" />
            </form>
    </div>
  )
}

export default Searchbar
