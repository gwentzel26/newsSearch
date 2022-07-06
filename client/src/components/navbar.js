import React from "react";
import {card} from "react-bootstrap";
import '../css/navbar.css'

import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => {


    return(

            <div>
                        
                    <button> <h1>Home</h1></button>
                    <input type="text" id= "searchQuery" placeholder="Search News"></input>
                    


            </div>
    )


}

export default Navbar;