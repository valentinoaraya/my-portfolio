import React from 'react';
import "./AboutMe.css"
import ImgSkills from './ImgSkills/ImgSkills.jsx';
import htmlSkill from "../../assets/images/skills/html-logo.webp"
import cssSkill from "../../assets/images/skills/css-logo.webp"
import jsSkill from "../../assets/images/skills/js-logo.webp"
import reactSkill from "../../assets/images/skills/react-logo.webp"
import nodejsSkill from "../../assets/images/skills/nodejs-logo.webp"
import typescriptSkill from "../../assets/images/skills/typescript-logo.webp"
import mongodbSkill from "../../assets/images/skills/mongodb-logo.webp"
import firebaseSkill from "../../assets/images/skills/firebase-logo.webp"
import gitSkill from "../../assets/images/skills/git-logo.webp"
import pythonSkill from "../../assets/images/skills/python-logo.webp"
import Education from './Education/Education.jsx';

const AboutMe = () => {
    return (
        <section id='aboutMe' className='aboutMeContainer'>
            <div className='divAboutMeSection'>
                <h1>Sobre mí</h1>
                <div className='dataContainer'>
                    <div className='aboutMeSkillsContainer'>
                        <div className='aboutMe'>
                            <p>👨‍💻 Desde que comencé mi viaje en la programación en 2020, me he apasionado por el desarrollo de software y la tecnología.</p>
                            <p>🎓 Completé con éxito la carrera de React JS  Developer en Coderhouse, lo que me ha permitido adquirir sólidas  habilidades en el desarrollo de interfaces dinámicas y responsivas.</p>
                            <p>🚀 Actualmente, trabajo como freelancer, donde  he tenido la oportunidad de aplicar mis conocimientos en proyectos  variados, colaborando con clientes para ofrecer soluciones  personalizadas que cumplan con sus necesidades.</p>
                            <p>📚 Además, soy estudiante de segundo año de  Ingeniería en Sistemas de la Información en la Universidad Tecnológica  Nacional (UTN).</p>
                        </div>
                        <div className='skills'>
                            <h2>Habilidades</h2>
                            <div className='skillsContainer fullSkillsContainer'>
                                <ImgSkills rutaImagen={htmlSkill} />
                                <ImgSkills rutaImagen={cssSkill} />
                                <ImgSkills rutaImagen={jsSkill} />
                                <ImgSkills rutaImagen={reactSkill} />
                                <ImgSkills rutaImagen={nodejsSkill} />
                                <div className='skillsContainer puedeAparecer'>
                                    <ImgSkills rutaImagen={typescriptSkill} />
                                    <ImgSkills rutaImagen={mongodbSkill} />
                                    <ImgSkills rutaImagen={firebaseSkill} />
                                    <ImgSkills rutaImagen={gitSkill} />
                                    <ImgSkills rutaImagen={pythonSkill} />
                                </div>
                            </div>
                            <div className='skillsContainer puedeDesaparecer'>
                                <ImgSkills rutaImagen={typescriptSkill} />
                                <ImgSkills rutaImagen={mongodbSkill} />
                                <ImgSkills rutaImagen={firebaseSkill} />
                                <ImgSkills rutaImagen={gitSkill} />
                                <ImgSkills rutaImagen={pythonSkill} />
                            </div>

                        </div>
                    </div>
                    <div className='divEducation'>
                        <Education />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
