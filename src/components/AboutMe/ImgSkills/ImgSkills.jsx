import React from 'react';
import "./ImgSkills.css"

const ImgSkills = ({rutaImagen, height}) => {
    return (
        <div>
            <img 
                className='imgSkill' src={rutaImagen} alt="Imagen habilidad" 
                style={{height: height}}
            />
        </div>
    );
}

export default ImgSkills;
