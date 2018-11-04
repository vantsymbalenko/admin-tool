import React from 'react';
import { Link } from 'react-router-dom';

import 'components/header/header.css';
import {NAVBAR_LINKS} from "../../constants/generalConstants";

const NavbarListItem = (props) => {
    return(
        <li className={"navbar-list-item"}>
            <Link to={props.to} className={"navbar-list-href"}>
                {props.linkText}
            </Link>
        </li>
    );
};

NavbarListItem.defaultProps = {
    to: "/"
};

export const Header = (props) => {
    return (
        <nav className={"navbar"}>
            <ul className={"navbar-list"}>
                {NAVBAR_LINKS.map(item => {
                    return(
                        <NavbarListItem key={item.to} {...item}/>
                    );
                })}
            </ul>
        </nav>
    );
};

Header.defaultValue = {};

Header.propTypes = {};