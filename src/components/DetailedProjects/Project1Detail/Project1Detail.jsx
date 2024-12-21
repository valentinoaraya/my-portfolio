import React, { useEffect } from 'react';
import "./Project1Detail.css"
import HeaderDetail from '../HeaderDetail.jsx';
import ImageDetail from '../ImageDetail.jsx';
import project1Image from "../../../assets/images/sportymaxx/imagenProyecto1.webp"
import demoResponsiveIMG from "../../../assets/images/sportymaxx/demoResponsive.webp"
import imgAdminProducts from "../../../assets/images/sportymaxx/adminProducts.webp"
import imgCloudinaryDemo from "../../../assets/images/sportymaxx/cloudinaryDemo.webp"
import imgFirebaseAuth from "../../../assets/images/sportymaxx/firebaseAuth.webp"
import imgMpIntegration from "../../../assets/images/sportymaxx/mpIntegration.webp"
import imgNodemailerDemo from "../../../assets/images/sportymaxx/nodemailerDemo.webp"

const Project1Detail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='projectDetailContainer'>
            <div className='divProjectDetail'>

                <HeaderDetail
                    volver={true}
                    title={"SportyMaxx"}
                    website={"https://sporty-maxx.vercel.app"}
                    stack={"React JS, Node JS, Firebase."}
                    subtitle={"Mi primer proyecto real."}
                    description={"E-commerce realizado para una tienda de ropa."}
                    imageProject={project1Image}
                    githubSection={true}
                    github={"https://github.com/valentinoaraya/SportyMaxx"}
                    repositorioBack={"https://github.com/valentinoaraya/sporty-maxx-backend"}
                />

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

                <ImageDetail
                    title={"Administración de productos."}
                    description={"Cuenta con una interfaz para que el administrador pueda agregar, ver, editar y elminar productos cuando desee. Los datos se envían al endpoint del servidor correspondiente y este se encarga de conectarse con la base de datos y realizar las operaciones correspondientes."}
                    image={imgAdminProducts}
                />

                <ImageDetail
                    title={"Cloudinary - Almacenamiento de imágenes."}
                    description={"A la hora de subir un nuevo producto  o de editar la imagen de alguno ya existente, el Backend se encarga de subir las imágnes a la plataforma Cloudinary, donde son almacenadas para luego ser consumidas cuando se quiere mostrar un producto en la web. Si el administrador actualiza una imagen o elimina un producto, las imágenes también son eliminadas de Cloudinary."}
                    image={imgCloudinaryDemo}
                    invertContent={true}
                />

                <ImageDetail
                    title={"Firebase Authentication."}
                    description={"Cuenta con  autenticación de usuarios implementando Firebase Authentication. El usuario debe de ingresar un correo electrónico y una contraseña a la hora de registrarse, éstas se guardaran en la base de datos y se enviará un correo de verificación a la dirección del correo proporcionado."}
                    image={imgFirebaseAuth}
                />

                <ImageDetail
                    title={"Mercado Pago integration."}
                    description={"Cuando vayamos a realizar el pago tenemos la posibilidad de hacerlo mediante tarjetas de crédito/débito y transferencia gracias a la integración con Mercado Pago."}
                    image={imgMpIntegration}
                    invertContent={true}
                />

                <ImageDetail
                    title={"Envío de correos y órdenes de compras."}
                    description={"Cuando un pedido es realizado, el Backend se encarga de enviar un correo electrónico al comprador confirmando y mostrando el pedido realizado, y otro correo al vendedor donde se muestran todos los datos del comprador y del pedido realizado (utilizando Nodemailer). Las órdenes de compra se guardan en la base de datos y existe una interfaz para que el vendedor pueda verlas."}
                    image={imgNodemailerDemo}
                />
            </div>
        </div>
    );
}

export default Project1Detail;
