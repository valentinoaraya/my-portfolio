import React from 'react';
import "./ProjectComponent.css"
import Button from '../../common/Button/Button.jsx';
import { Link } from 'react-router-dom';
import imgReact from "../../../assets/images/skills/react-logo.webp"
import imgPython from "../../../assets/images/skills/python-logo.webp"
import imgNode from "../../../assets/images/skills/nodejs-logo.webp"
import imgMongo from "../../../assets/images/skills/mongodb-logo.webp"
import imgFirebase from "../../../assets/images/skills/firebase-logo.webp"
import imgSQL from "../../../assets/images/skills/sql-logo.webp"

const ProjectComponent = ({ title, imagen, descripicon, secondDescription, web, github, tecnologias }) => {

    const namesImg = {
        rct: imgReact,
        py: imgPython,
        nd: imgNode,
        mdb: imgMongo,
        fb: imgFirebase,
        sql: imgSQL
    }

    const arrayTecnologias = tecnologias.split(" ")

    if (!title) {
        return <div className='projectContainer'>
            <div className='divWithPadding moreProjectsInprocess'>
                <h1>Más proyectos en proceso...</h1>
            </div>
        </div>
    }

    const newTitle = title.toLowerCase().replace(" ", "-")

    return (
        <div className='projectContainer'>
            <div className='divWithPadding'>
                <div className='divImgProjectContainer'>
                    <img src={imagen} alt="Imagen proyecto" className='imgProject' />
                </div>
                <div className='dataProjectContainer'>
                    <h2 className='titleProject'>{title}</h2>
                    <p className='descriptionProject'>
                        {descripicon}
                    </p>
                    <p className='secondDescripiton'>
                        {secondDescription}
                    </p>
                    <div className='divTecnologias'>
                        {
                            arrayTecnologias.map((tecnologia) => {
                                return <img
                                    key={tecnologia}
                                    className='imagenTecnologia'
                                    src={namesImg[tecnologia]}
                                    alt="Logo tecnología"
                                />
                            })
                        }
                    </div>
                    <div className='divButtonsProject'>
                        <Link to={`/project-detail/${newTitle}`}>
                            <Button>Detalles sobre el proyecto</Button>
                        </Link>
                        {
                            web &&
                            <a href={web} target='_blank' rel='noopener noreferreer'>
                                <Button className={"outLineButton"}>Visitar web</Button>
                            </a>
                        }
                        {
                            github &&
                            <a href={github} target='_blank' rel='noopener noreferreer'>
                                <Button className={"outLineButton"} github={true} />
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectComponent;
