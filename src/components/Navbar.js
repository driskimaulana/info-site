import React from "react";
import Logo from "../images/logo.svg";

export default function Navbar(){

    return (

        <header>
            <nav className="navbar">
                <img src={Logo} className="navbar--logo"/>
                <h3 className="navbar--logo_text">ReactFacts</h3>
                <h4 className="navbar--title">React Couse - Project 1</h4>
            </nav>
        </header>

    );

}