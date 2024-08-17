import React from 'react';
import "./AboutMe.css"
import Section from '../utils/Section/Section.jsx';
import ImgSkills from './ImgSkills/ImgSkills.jsx';
import htmlSkill from "../../assets/images/html-logo.png"
import cssSkill from "../../assets/images/css-logo.png"
import jsSkill from "../../assets/images/js-logo.png"
import reactSkill from "../../assets/images/react-logo.png"
import nodejsSkill from "../../assets/images/nodejs-logo.png"
import mongodbSkill from "../../assets/images/mongodb-logo.png"
import firebaseSkill from "../../assets/images/firebase-logo.png"
import gitSkill from "../../assets/images/git-logo.png"
import pythonSkill from "../../assets/images/python-logo.png"
import Education from './Education/Education.jsx';

const AboutMe = () => {
    return (
        <section id='aboutMe' className='aboutMeContainer'>
            <div className='divAboutMeSection'>
                <Section>
                    <h1>Sobre mí</h1>
                </Section>
                <div className='dataContainer'>
                    <div className='aboutMeSkillsContainer'>
                        <div className='aboutMe'>
                            <Section><p>👨‍💻 Desde que comencé mi viaje en la programación en 2020, me he apasionado por el desarrollo de software y la tecnología.</p></Section>
                            <Section><p>🎓 Completé con éxito la carrera de React JS  Developer en Coderhouse, lo que me ha permitido adquirir sólidas  habilidades en el desarrollo de interfaces dinámicas y responsivas.</p></Section>
                            <Section><p>🚀 Actualmente, trabajo como freelancer, donde  he tenido la oportunidad de aplicar mis conocimientos en proyectos  variados, colaborando con clientes para ofrecer soluciones  personalizadas que cumplan con sus necesidades.</p></Section>
                            <Section><p>📚 Además, soy estudiante de segundo año de  Ingeniería en Sistemas de la Información en la Universidad Tecnológica  Nacional (UTN).</p></Section>
                        </div>
                        <div className='skills'>
                            <Section>
                                <h2>Habilidades</h2>
                            </Section>
                            <Section>
                                <div className='skillsContainer fullSkillsContainer'>
                                    <ImgSkills rutaImagen={htmlSkill} />
                                    <ImgSkills rutaImagen={cssSkill} />
                                    <ImgSkills rutaImagen={jsSkill} />
                                    <ImgSkills rutaImagen={reactSkill} />
                                    <ImgSkills rutaImagen={nodejsSkill} />
                                    <div className='skillsContainer puedeAparecer'>
                                        <ImgSkills rutaImagen={mongodbSkill} />
                                        <ImgSkills rutaImagen={firebaseSkill} />
                                        <ImgSkills rutaImagen={gitSkill} />
                                        <ImgSkills rutaImagen={pythonSkill} />
                                    </div>
                                </div>
                                <div className='skillsContainer puedeDesaparecer'>
                                    <ImgSkills rutaImagen={mongodbSkill} />
                                    <ImgSkills rutaImagen={firebaseSkill} />
                                    <ImgSkills rutaImagen={gitSkill} />
                                    <ImgSkills rutaImagen={pythonSkill} />
                                </div>
                            </Section>
                        </div>
                    </div>
                    <div className='divEducation'>
                        <Education/>       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
