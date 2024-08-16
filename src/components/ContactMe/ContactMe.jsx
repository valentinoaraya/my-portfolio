import React from 'react';
import "./ContactMe.css"
import Social from '../common/Social/Social.jsx';
import Section from "../utils/Section/Section.jsx"

const ContactMe = () => {
    return (
        <section className='contactMeContainer'>
            <div className='divContactMe'>
                <Section>
                    <h1>Contáctame</h1>
                </Section>
                <div className='contacts'>
                    <Section>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                            </svg>
                            <p>valentinoaraya04@gmail.com</p>
                        </div>
                    </Section>
                    <Section>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                            <p>(+54) 2625660880</p>
                        </div>
                    </Section>
                    <Section>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                            <p>San Rafael - Mendoza, Argentina</p>
                        </div>
                    </Section>
                </div>
                <Section>
                    <div className='redesSociales'>
                        <Social/>
                    </div>
                </Section>
            </div>
        </section>
    );
}

export default ContactMe;
