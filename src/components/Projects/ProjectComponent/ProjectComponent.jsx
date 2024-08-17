import React from 'react';
import "./ProjectComponent.css"
import Button from '../../common/Button/Button.jsx';
import { Link } from 'react-router-dom';

const ProjectComponent = ({title, imagen, descripicon, web, github}) => {

    if (!title){
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
                    <img src={imagen} alt="Imagen proyecto" className='imgProject'/>
                </div>
                <div className='dataProjectContainer'>
                    <h2 className='titleProject'>{title}</h2>
                    <p className='descriptionProject'>
                        {descripicon}
                    </p>
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
                            <Button className={"outLineButton"} github={true}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectComponent;
