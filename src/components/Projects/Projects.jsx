import React from 'react';
import "./Projects.css"
import ProjectComponent from './ProjectComponent/ProjectComponent.jsx';
import imgProject1 from "../../assets/images/imagenProyecto1.png"

const Projects = () => {
    return (
        <section className='projectsContainer'>
            <div className='divProjectsSection'>
                <h1>Proyectos</h1>
                <div className='divProjects'>
                    <ProjectComponent 
                        github={true}
                        title={"SportyMaxx e-commerce"}
                        imagen={imgProject1}
                        descripicon={`Mi primer proyecto para un cliente. Aprendí mucho hacíendolo. 
                                      E-commerce para una empresa dedicada a la venta de ropa.
                                      Cuenta con interfaces para que el administrador (dueño) pueda subir, editar y eliminar productos cuando desee.
                                      El Front End fue realizado con React Js y el Back End con Node Js y Firebase.`
                        }
                        web={"https://sporty-maxx.vercel.app/"}
                    />
                    <ProjectComponent/>
                </div>
            </div>
        </section>
    );
}

export default Projects;
