import React from 'react';
import Header from "../common/Header/Header.jsx"
import Home from '../Home/Home.jsx';
import Projects from '../Projects/Projects.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import ContactMe from '../ContactMe/ContactMe.jsx';

const Main = () => {
    return (
        <main>
            <Header/>
            <Home/>
            <Projects/>
            <AboutMe/>        
            <ContactMe/>
        </main>
    );
}

export default Main;
