import React from 'react';
import "./Education.css"
import Section from '../../utils/Section/Section.jsx';

const Education = () => {

    return (
        <div className='timeLine'>
            <Section>
                <div className='timeLineItem'>
                    <h3 className='year'>2020</h3>
                    <div className='timeLinePoint'></div>
                    <div className='timeLineContent'>
                        <h3 className='title'>Instituto San Antonio</h3>
                        <p>Bachillerato de Informática</p>
                        <p>Ví contenidos básicos de programación, algoritmos lógica de programación, bases de datos, redes, entre otros temas.</p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className='timeLineItem'>
                    <h3 className='year'>2022</h3>
                    <div className='timeLinePoint'></div>
                    <div className='timeLineContent'>
                        <h3 className='title'>Coderhouse</h3>
                        <p>Carrera de ReactJS Developer</p>
                        <p>Pude aprender cómo modelar páginas web con HTML y CSS, luego, en el curso de JavaScript aprendí a darle interactividad a las páginas, y por último aprendimos a usar React JS.</p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className='timeLineItem'>
                    <h3 className='year'>2023</h3>
                    <div className='timeLinePoint'></div>
                    <div className='timeLineContent'>
                        <h3 className='title'>UTN - Ingeniería en Sistemas</h3>
                        <p>Ya casi en el tercer año de cursado puedo decir que me está gustando mucho la carrera. Aprendí Python en el primer año, mientras que en el segundo año lo seguimos profundizando, también estamos aprendiendo otros lenguajes como Java y C++ entre otros temas interesantes que se dictan en la carrera.</p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className='timeLineItem'>
                    <h3 className='year'></h3>
                    <div className='timeLinePoint'></div>
                    <div className='timeLineContent'>
                        <h3 className='title'>Educación autodidacta</h3>
                        <p>Mientras realizo la carrera, sigo formándome de forma autodidacta tomando cursos y realizando proyectos.</p>
                    </div>
                </div>
            </Section>
            <div className='timeLineLine'></div>
        </div>
    );
}

export default Education;
