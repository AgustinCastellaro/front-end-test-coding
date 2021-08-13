import React from 'react';
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { Nav } from 'react-bootstrap';
import Searchbar from '../searchbar/Searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../sass/header/header.scss";

function Header() {
    return (
            <Nav className="nav row justify-content-center mx-auto">
                <div className="logo d-flex justify-content-center align-items-center">
                    <Link to="/" className="link">
                        <AiFillGithub className="icon" />
                        <p className="m-0">Github Users</p>
                    </Link>
                </div>
                <Searchbar />
            </Nav>
    )
}

export default Header
