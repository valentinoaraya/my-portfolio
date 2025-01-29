import React from 'react';
import "./Projects.css"
import ProjectComponent from './ProjectComponent/ProjectComponent.jsx';
import imgProject1 from "../../assets/images/sportymaxx/imagenProyecto1.webp"
import imgProject2 from "../../assets/images/ventatrack/imgProject2.webp"
import imgProject3 from "../../assets/images/turnero/calendarioDoctor2.webp"

const Projects = () => {
    return (
        <section id='projects' className='projectsContainer'>
            <div className='divProjectsSection'>
                <h1>Proyectos</h1>
                <div className='divProjects'>

                    <ProjectComponent
                        github={"https://github.com/valentinoaraya/SportyMaxx"}
                        title={"SportyMaxx"}
                        imagen={imgProject1}
                        descripicon={`E-commerce Full-stack para una empresa dedicada a la venta de ropa.
                                        Cuenta con interfaces para que el administrador (dueño) pueda subir, editar y eliminar productos cuando desee.
                                        El Front End fue realizado con React Js y el Back End con Node Js y Firebase.`
                        }
                        secondDescription={`E-commerce Full-stack para una empresa dedicada a la venta de ropa. 
                                                El Front End fue realizado con React Js y el Back End con Node Js y Firebase.`
                        }
                        web={"https://sporty-maxx.vercel.app/"}
                        tecnologias={"rct nd fb"}
                    />
                    <ProjectComponent
                        title={"Turnero PAMI"}
                        imagen={imgProject3}
                        descripicon={`Sistema de gestión de turnos para una clínica.
                                      Cada doctor cuenta con su calendario donde tendrán sus turnos disponibles.
                                      Cuenta con un panel de administrador con el cual es posible habilitar y deshabilitar turnos a los doctores,
                                      además de ver los turnos tomados por los pacientes.
                                      El administrador puede agregar, editar y eliminar doctores.`
                        }
                        secondDescription={`Sistema de gestión de turnos para una clínica.
                                            Los usuarios pueden ver los turnos disponibles de los doctores y tomar uno.
                                            El administrador puede gestionar los doctores y los turnos.`
                        }
                        web={"https://turnero.rcg.ar/"}
                        tecnologias={"rct nd sql"}
                    />
                    <ProjectComponent
                        github={"https://github.com/valentinoaraya/ventatrack"}
                        title={"VentaTrack"}
                        imagen={imgProject2}
                        descripicon={`Software de seguimiento de ventas e inventario para negocios o despensas.
                                      Front End realizado con React JS, se comunica directamente con una base de datos de Firebase.
                                      Cuenta con gestión de productos (agregar, editar, eliminar) y visualización de ventas por día.
                                      `
                        }
                        secondDescription={`Software de seguimiento de ventas e inventario para negocios o despensas.
                                            Cuenta con gestión de productos (agregar, editar, eliminar) y visualización de ventas por día.
                                            `
                        }
                        web={"https://ventatrack-trial-version.vercel.app/"}
                        tecnologias={"rct fb"}
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;
