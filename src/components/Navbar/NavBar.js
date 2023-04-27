import React from "react";
import NavBarItem from "./NavBarItem/NavBarItem";
import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className="header">
            <div className="navBar">
                <p className="logo">{props.navBarLogo}</p>
                <ul className="itemList">
                        {props.items?.map((texto, index) => (
                            <NavBarItem key={index} texto={texto} />
                        )
                        )}
                </ul>
            </div>
            <div className="navbar bg-white">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
                        <button className="btn btn-info" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
            <CartWidget amount={'1'}/>
            
        </div>
    )
}

export default NavBar
