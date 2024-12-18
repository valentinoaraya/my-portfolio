import React from 'react';
import "./Home.css"
import Button from '../common/Button/Button.jsx';
import "animate.css"

const Home = () => {
    return (
        <div className='mainPageContainer'>
            <main className='mainPage'>
                <div className='divInfoContainer'>
                    <h1 className='principalTitle'>Hola, soy Valentino Araya</h1>
                    <h2 className='secundaryTitle'>Full Stack Developer</h2>
                    <p className='mainP'>Amo convertir ideas en experiencias digitales intuitivas y atractivas.</p>
                    <div className='buttonContainer'>
                        <Button download={true}>Descargar CV</Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
