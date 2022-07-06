import React from "react";
import {card, Navbar} from "react-bootstrap";
import '../css/home.css';
import '../components/navbar';

import { LinkContainer } from "react-router-bootstrap";

const Home = () => {


    return(

            <div>
                <button> <h1>Home</h1></button>
                    <input type="text" id= "searchQuery" placeholder="Search News"></input>




            </div>
    )


}

export default Home;