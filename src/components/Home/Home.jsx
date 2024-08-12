import React from 'react';
import "./Home.css"
import imagenPrincipal from "../../assets/images/principalImg.png"

const Home = () => {
    return (
        <div className='mainPageContainer'>        
            <main className='mainPage'>
                <div className='divInfoContainer'>
                    <h1 className='principalTitle'>¡Hola! Soy Valentino Araya,</h1>
                    <h2 className='secundaryTitle'>Front End developer.</h2>
                    <p className='mainP'>Amo convertir ideas en experiencias digitales intuitivas y atractivas.</p>
                </div>
                <div className='divImgContainer'>
                    <img className='principalImg' src={imagenPrincipal} alt="imagen" />
                </div>
            </main>
        </div>
    );
}

export default Home;
