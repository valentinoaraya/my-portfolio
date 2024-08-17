import React from 'react';
import "./Header.css";
import Social from '../Social/Social.jsx';

const NavBar = () => {
    return (
        <header className='headerNavBar'>
            <nav className='navBar'>
                <h3>Valenitno Araya</h3>
                <div className='divContainerNavs'>
                    <a href="#projects"><p>Proyectos</p></a>
                    <a href="#aboutMe"><p>Sobre mí</p></a>
                    <a href="#contactMe"><p>Contáctame</p></a>
                </div>
                <Social/>
            </nav>
        </header>
    );
}

export default NavBar;
