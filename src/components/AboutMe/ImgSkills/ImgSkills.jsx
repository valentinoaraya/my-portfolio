import React from 'react';
import "./ImgSkills.css"

const ImgSkills = ({rutaImagen}) => {
    return (
        <div>
            <img 
                className='imgSkill' src={rutaImagen} 
                alt="Imagen habilidad" 
            />
        </div>
    );
}

export default ImgSkills;
