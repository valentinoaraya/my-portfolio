import React from 'react';
import "./DetailedProjects.css"

const ImageDetail = ({ title, description, image, invertContent }) => {
    return (
        <div className={invertContent ? 'informationProjectContainer invertContent' : 'informationProjectContainer'}>
            <div className='dataProject'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='imgProject'>
                <img className='imgDemo' src={image} alt="Imagen demostración" />
            </div>
        </div>
    );
}

export default ImageDetail;
