import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-4">
            
            <div className="logo">
                <Link className="navbar-brand" to="/">Company Logo</Link>
            </div>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                            Categories
                        </Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/">Mobiles</Link>
                            <Link className="dropdown-item" to="/">Laptops</Link>
                            <Link className="dropdown-item" to="/">Men</Link>
                            <Link className="dropdown-item" to="/">Women</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <div className="profile ml-auto">
                    <ul>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                            <span className="cart-count">{0}</span>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                                Profile
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/">My Dashboard</Link>
                                <Link className="dropdown-item" to="/">Change Password</Link>
                                <Link className="dropdown-item" to="/">Sign Out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;