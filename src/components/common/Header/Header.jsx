import React from 'react';
import "./Header.css";
import Social from '../Social/Social.jsx';

const NavBar = () => {
    return (
        <header className='headerNavBar'>
            <nav className='navBar'>
                <h3>Valenitno Araya</h3>
                <div className='divContainerNavs'>
                    <p>Proyectos</p>
                    <p>Habilidades</p>
                    <p>Sobre mí</p>
                    <p>Contacto</p>
                </div>
                <Social/>
            </nav>
        </header>
    );
}

export default NavBar;
