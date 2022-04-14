import React from "react";
import Card from "./Card";
import "./Navbar.css"
const Navbar = (props) =>{
    return(
        <Card className="navbar">
            <a href="/"><h3>Angular</h3></a>
        </Card>
    )
};

export default Navbar;