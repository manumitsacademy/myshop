import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <Link class="nav-link" to="/products">Products</Link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;