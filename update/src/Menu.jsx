import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <NavLink activeClassName="active_class" to='/'>About US</NavLink>
            <NavLink activeClassName="active_class" to='/contact'>Contact US</NavLink>
            <br />
            <a href='/' >About</a>
            <a href='/contact' >Contact</a>

        </div>
    );
}

export default Menu;
