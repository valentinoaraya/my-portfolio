import React from 'react';
import "./ProjectDetail.css"
import { useParams } from 'react-router';
import project1Image from "../../assets/images/imagenProyecto1.png"

const ProjectDetail = () => {

    // En el futuro, cuando tenga más proyectos, haré este componente mucho más eficiente

    const {nameProject} = useParams()


    return (
        <div className='projectDetailContainer'>
            {
                nameProject === "sportymaxx-e-commerce" ?
                <div className='divProjectDetail'>
                    <h1 className='principalTitle'>SportyMaxx e-commerce</h1>
                    <p><span></span></p>
                    <img className='imageProjectDetail' src={project1Image} alt="Imagen proyecto" />

                </div>
                :
                <div className='divProjectDetail notProject'>
                    <h1>No se encontró el proyecto.</h1>
                </div>
            }     
        </div>
    );
}

export default ProjectDetail;
