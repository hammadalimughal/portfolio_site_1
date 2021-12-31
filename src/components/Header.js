import React from 'react'
import logo from './../images/logo.png'
import { Link , NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar-expand-lg">
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <Link className="navbar_brand_cutom" exact to="/">
                            <img src={logo} className="img-fluid" alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item custom_nav_item active">
                                    <NavLink activeClassName="active" className="nav-link nav_link_custom" exact to="/">About Me</NavLink>
                                </li>
                                <li className="nav-item custom_nav_item">
                                    <NavLink activeClassName="active" className="nav-link nav_link_custom" exact to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item custom_nav_item">
                                    <NavLink activeClassName="active" className="nav-link nav_link_custom" exact to="/portfolio">Portfolio</NavLink>
                                </li>
                                <li className="nav-item custom_nav_item">
                                    <NavLink activeClassName="active" className="nav-link nav_link_custom" exact to="/testimonials">Testinominals</NavLink>
                                </li>
                                <li className="nav-item custom_nav_item">
                                    <NavLink activeClassName="active" className="nav-link nav_link_custom" exact to="/blog">Blog</NavLink>
                                </li>
                                <li className="nav-item custom_nav_item">
                                    <NavLink activeClassName="active" className="nav-link nav_link_custom" exact to="/contact">Contact Us</NavLink></li>
                                <li className="nav-item custom_nav_item">
                                    <NavLink className="nav-item nav_link_hireme" exact to="/hireme">Hire Me!</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
