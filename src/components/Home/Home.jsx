import React from 'react';
import "./Home.css"
import imagenPrincipal from "../../assets/images/principalImg.png"
import Button from '../common/Button/Button.jsx';
import "animate.css"

const Home = () => {
    return (
        <div className='mainPageContainer'>        
            <main className='mainPage'>
                <div className='divInfoContainer animate__animated animate__fadeInUp'>
                    <h1 className='principalTitle'>¡Hola! Soy Valentino Araya,</h1>
                    <h2 className='secundaryTitle'>Front End developer.</h2>
                    <p className='mainP'>Amo convertir ideas en experiencias digitales intuitivas y atractivas.</p>
                    <div className='buttonContainer'>
                        <Button download={true}>Descargar CV</Button>
                    </div>
                </div>                                    
                <div className='divImgContainer'>
                    <img className='principalImg animate__animated animate__fadeInUp' src={imagenPrincipal} alt="imagen" />
                </div>
            </main>
        </div>
    );
}

export default Home;
