import React from 'react';
import "./ImgSkills.css"

const ImgSkills = ({rutaImagen, width}) => {
    return (
        <div>
            <img 
                className='imgSkill' src={rutaImagen} alt="Imagen habilidad" 
                style={{width: width}}
            />
        </div>
    );
}

export default ImgSkills;
