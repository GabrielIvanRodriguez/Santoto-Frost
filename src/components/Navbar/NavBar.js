import React from "react";
import { NavLink } from 'react-router-dom';
import CartWidget from "../Cart/CartWidget/CartWidget";
import './NavBar.css';

const NavBar = (props) => {

    const {navBarItems} = props;

    return (
        <nav className="navbar navbar-expand-lg bg-white sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand nav-link" to={"/"}>Santoto Frost</NavLink>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    
                    <div className="offcanvas-body">
                    <div className="offcanvas-header">
                        <NavLink className="navbar-brand nav-link offcanvas-title" id="offcanvasNavbarLabel" to={"/"}>Santoto Frost</NavLink>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/" >Inicio</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </p>
                                <ul className="dropdown-menu">
                                    {
                                        navBarItems?.map( ({path,name},index)=>
                                        <li key={index} ><NavLink className="dropdown-item" to={path}>{name}</NavLink></li>
                                        )
                                    

                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="header">
                    <div className="navbar bg-white">
                        <div className="container-fluid">
                            <form className="d-flex" role="search">
                                <input id="search" className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
                                <button className="btn btn-info" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                    <CartWidget amount={'1'} />

                </div>
            </div>
        </nav>
    )
}

export default NavBar
