import React, { useEffect } from 'react';
import "./ProjectDetail.css"
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Section from "../utils/Section/Section.jsx"
import project1Image from "../../assets/images/imagenProyecto1.png"
import demoResponsiveIMG from "../../assets/images/demoResponsive.png"
import imgAdminProducts from "../../assets/images/adminProducts.png"
import imgCloudinaryDemo from "../../assets/images/cloudinaryDemo.png"
import imgFirebaseAuth from "../../assets/images/firebaseAuth.png"
import imgMpIntegration from "../../assets/images/mpIntegration.png"
import imgNodemailerDemo from "../../assets/images/nodemailerDemo.png"

const ProjectDetail = () => {

    // En el futuro, cuando tenga más proyectos, haré este componente mucho más eficiente

    const {nameProject} = useParams()

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [nameProject])

    return (
        <div className='projectDetailContainer'>
            {
                nameProject === "sportymaxx-e-commerce" ?
                <div className='divProjectDetail'>
                    <Link className='link' to={"/"}>
                        <p className='volver'><span className='volverFlecha'>{"<"}</span> Volver</p>
                    </Link>

                    <Section>
                        <h1 className='principalTitle titleProjectDetail'>SportyMaxx e-commerce</h1>
                    </Section>
                    
                    <Section>
                        <p className='pDataProject'><span>WEBSITE</span> <a href="https://sporty-maxx.vercel.app/" target='_blank' rel='noopener noreferreer'>https://sporty-maxx.vercel.app/</a></p>
                        <p className='pDataProject'><span>STACK</span> React JS, Node JS, Firebase.</p>
                        <p className='pDataProject'><span>GITHUB</span> Repositorio privado.</p>
                    </Section>

                    <Section>
                        <h2 className='subtitle'>Mi primer proyecto real.</h2>
                        <p>Se trata de un e-commerce realizado para una tienda de ropa.</p>
                    </Section>
                    
                    <Section th={0.3}>
                        <img className='imageProjectDetail' src={project1Image} alt="Imagen proyecto" />
                    </Section>

                    <div className='demoResponsiveSection'>
                        <div className='responsiveText'>
                                <div>
                                    <p>RES</p>
                                    <p>PON</p>
                                    <p>SIVE</p>
                                </div>
                        </div>
                            <div className='imgResponsive'>
                                <img className='imgDemoResponsive' src={demoResponsiveIMG} alt="Imagen celular" />
                            </div>
                    </div>

                    <Section>
                        <div className='informationProjectContainer'>
                            <div className='dataProject'>
                                <h3>Administración de productos.</h3>
                                <p>Cuenta con una interfaz para que el administrador pueda agregar, ver, editar y elminar productos cuando desee. Los datos se envían al endpoint del servidor correspondiente y este se encarga de conectarse con la base de datos y realizar las operaciones correspondientes.</p>
                            </div>
                            <div className='imgProject'>
                                <img className='imgDemo' src={imgAdminProducts} alt="Imagen demostración" />
                            </div>
                        </div>
                    </Section>

                    <Section>
                        <div className='informationProjectContainer invertContent'>
                            <div className='dataProject'>
                                <h3>Cloudinary - Almacenamiento de imágenes.</h3>
                                <p>A la hora de subir un nuevo producto  o de editar la imagen de alguno ya existente, el Backend se encarga de subir las imágnes a la plataforma Cloudinary, donde son almacenadas para luego ser consumidas cuando se quiere mostrar un producto en la web. Si el administrador actualiza una imagen o elimina un producto, las imágenes también son eliminadas de Cloudinary.</p>
                            </div>
                            <div className='imgProject'>
                                <img className='imgDemo' src={imgCloudinaryDemo} alt="Imagen demostración" />
                            </div>
                        </div>
                    </Section>

                    <Section>
                        <div className='informationProjectContainer'>
                            <div className='dataProject'>
                                <h3>Firebase Authentication.</h3>
                                <p>Cuenta con  autenticación de usuarios implementando Firebase Authentication. El usuario debe de ingresar un correo electrónico y una contraseña a la hora de registrarse, éstas se guardaran en la base de datos y se enviará un correo de verificación a la dirección del correo proporcionado.</p>
                            </div>
                            <div className='imgProject'>
                                <img className='imgDemo' src={imgFirebaseAuth} alt="Imagen demostración" />
                            </div>
                        </div>
                    </Section>

                    <Section>
                        <div className='informationProjectContainer invertContent'>
                            <div className='dataProject'>
                                <h3>Mercado Pago integration.</h3>
                                <p>Cuando vayamos a realizar el pago tenemos la posibilidad de hacerlo mediante tarjetas de crédito/débito y transferencia gracias a la integración con Mercado Pago.</p>
                            </div>
                            <div className='imgProject'>
                                <img className='imgDemo' src={imgMpIntegration} alt="Imagen demostración" />
                            </div>
                        </div>
                    </Section>

                    <Section>
                        <div className='informationProjectContainer'>
                            <div className='dataProject'>
                                <h3>Envío de correos y órdenes de compras.</h3>
                                <p>Cuando un pedido es realizado, el Backend se encarga de enviar un correo electrónico al comprador confirmando y mostrando el pedido realizado, y otro correo al vendedor donde se muestran todos los datos del comprador y del pedido realizado (utilizando Nodemailer). Las órdenes de compra se guardan en la base de datos y existe una interfaz para que el vendedor pueda verlas.</p>
                            </div>
                            <div className='imgProject'>
                                <img className='imgDemo' src={imgNodemailerDemo} alt="Imagen demostración" />
                            </div>
                        </div>
                    </Section>
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
