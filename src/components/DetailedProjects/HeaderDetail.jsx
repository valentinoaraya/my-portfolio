import React from 'react';
import "./DetailedProjects.css"
import { Link } from 'react-router-dom';

const HeaderDetail = ({ title, website, stack, github, subtitle, description, imageProject, volver, githubSection, repositorioBack }) => {
    return (
        <>
            {
                volver &&
                <Link className='link' to={"/"}>
                    <p className='volver'><span className='volverFlecha'>{"<"}</span> Volver</p>
                </Link>
            }
            {title && <h1 className='principalTitle titleProjectDetail'>{title}</h1>}

            {website && <p className='pDataProject'><span>WEBSITE</span> <a href={website} target='_blank' rel='noopener noreferreer'>{website}</a></p>}
            {stack && <p className='pDataProject'><span>STACK</span> {stack}</p>}
            {githubSection && <p className='pDataProject'><span>GITHUB</span> {github ? <a href={github} target='_blank' rel='noopener noreferreer'>{github}</a> : "Repositorio privado."}</p>}
            {repositorioBack && <p className='pDataProject'><span>REPOSITORIO BACKEND</span> <a href={repositorioBack} target='_blank' rel='noopener noreferreer'>{repositorioBack}</a></p>}

            {subtitle && <h2 className='subtitle'>{subtitle}</h2>}
            {description && <p>{description}</p>}

            {imageProject && <img className='imageProjectDetail' src={imageProject} alt="Imagen proyecto" />}
        </>
    );
}

export default HeaderDetail;
