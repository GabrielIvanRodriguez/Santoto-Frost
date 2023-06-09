import React from "react";
import { NavLink } from 'react-router-dom';
import CartWidget from "../cart/cartWidget/CartWidget"
import './NavBar.css';

const NavBar = (props) => {

    const { navBarItems } = props;                                            //me traigo los items que van a ir en el navBar y que vienen por props
    //renderizo navbar de boostrap haciendo uso de NavLink para redireccionar desde el logo e inicio al index,
    //y luego cada categoria al path seteado en el comp MainLayout
    return (
        <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-lg mb-5">
            <div className="container-fluid d-flex flex-nowrap">
                <NavLink className="navbar-brand nav-link" to={"/"}><img src="https://res.cloudinary.com/dnakxwijm/image/upload/v1687141581/santoto-frost/logos/gsattkshqj3xeydjb0ap.png" alt="logo" style={{ height: '5rem', width: '5rem' }} /></NavLink>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                    <div className="offcanvas-body">
                        <div className="offcanvas-header">
                            <NavLink className="navbar-brand nav-link offcanvas-title" id="offcanvasNavbarLabel" to={"/"}>
                                <img style={{ width: '15%' }} src="https://res.cloudinary.com/dnakxwijm/image/upload/v1687142217/santoto-frost/logos/monta%C3%B1aLogo.png" alt="montaña" />
                                <img style={{ width: '15%' }} src="https://res.cloudinary.com/dnakxwijm/image/upload/v1687142246/santoto-frost/logos/logoLetras.png" alt="logo" />
                                <img style={{ width: '70%', paddingLeft: '50px' }} src="https://res.cloudinary.com/dnakxwijm/image/upload/v1687142775/santoto-frost/logos/rianafbsmr74z44gjcfj.png" alt="calidadbajocero" />
                            </NavLink>
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
                                        navBarItems?.map(({ path, name }, index) =>
                                            <li key={index} ><NavLink className="dropdown-item" to={path}>{name}</NavLink></li>
                                        )
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-self-end">
                    <div className="navbar bg-white">
                        <div className="container-fluid d-flex flex-nowrap">
                            <form className="d-flex" role="search">
                                <input id="search" className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
                                <button className="btn btn-info btn-sm btn3d" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                        <CartWidget />

                </div>
                <button className="navbar-toggler btn-lg btn-sm btn3d" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
    )
}

export default NavBar
