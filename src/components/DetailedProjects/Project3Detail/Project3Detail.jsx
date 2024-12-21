import React, { useEffect } from 'react';
import "./Project3Detail.css"
import HeaderDetail from '../HeaderDetail.jsx';
import ImageDetail from '../ImageDetail.jsx';
import imgProject from "../../../assets/images/ventatrack/imgProject2.webp"
import imgLogin from "../../../assets/images/ventatrack/inicioSesion.webp"
import imgModalAdd from "../../../assets/images/ventatrack/modalAgregar.webp"
import imgModalUpdate from "../../../assets/images/ventatrack/modalActualizar.webp"
import imgTablaProductos from "../../../assets/images/ventatrack/tablaProductos.webp"
import imgHistorial from "../../../assets/images/ventatrack/historialVentas.webp"

const Project3Detail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='projectDetailContainer'>
            <div className='divProjectDetail'>
                <HeaderDetail
                    volver={true}
                    title={"VentaTrack"}
                    website={"https://ventatrack.vercel.app/"}
                    stack={"React JS, Firebase."}
                    subtitle={"Software de seguimiento de ventas e inventario."}
                    description={"Software de seguimiento de ventas e inventario para negocios o despensas. Front End realizado con React JS, se comunica directamente con una base de datos de Firebase. Cuenta con gestión de productos (agregar, editar, eliminar) y visualización de ventas por día."}
                    imageProject={imgProject}
                    githubSection={true}
                    github={"https://github.com/valentinoaraya/ventatrack"}
                />


                <div className='divDescriptionContainer'>
                    <h2 className='principalTitle subtitleProject'>Funcionamiento principal:</h2>
                </div>

                <ImageDetail
                    title={"1. Inicio de sesión"}
                    description={"Los usuarios habilitados (un usuario por kiosco/despensa) pueden iniciar sesión con su cuenta para entrar a la aplicación. Cada usuario cuenta con su propia base de datos para almacenar sus propios productos y su propio histoiral de ventas. Para manejar la autentificaión se utilizó Firebase Authentication."}
                    image={imgLogin}
                />

                <ImageDetail
                    title={"2. Agregar productos al panel de venta"}
                    description={"Una vez iniciada la sesión, el usuario puede agregar productos al panel de venta. Para ello, se ingresa el código de barra del producto mediante un lector de códigos de barra y el sistema lo busca en la base de datos. Una vez encontrado, se agrega al panel de ventas y se suma su precio al total."}
                    image={imgProject}
                />

                <ImageDetail
                    title={"3. Realizar venta"}
                    description={"Una vez que el usuario haya agregado todos los productos al panel de venta, puede realizar la venta. El sistema registra la venta en la base de datos y muestra un mensaje de confirmación. La venta se registra con la fecha y hora actual para luego poder ser visualizada en el historial de ventas."}
                    image={imgHistorial}
                />

                <div className='divDescriptionContainer'>
                    <h2 className='principalTitle subtitleProject'>Otras características:</h2>
                </div>

                <ImageDetail
                    title={"Agregar producto a la base de datos"}
                    description={"Si el producto no se encuentra en la base de datos, automáticamente se abre un modal para agregar el producto a la base de datos. Se ingresa el nombre, precio y código de barra del producto y se guarda en la base de datos. Luego, el producto se agrega al panel de ventas."}
                    image={imgModalAdd}
                />

                <ImageDetail
                    title={"Tabla de productos"}
                    description={"En el menú 'Productos', el usuario puede visualizar todos los productos que tiene en su base de datos. Puede editar el nombre, precio y código de barra de cada producto. Además, puede eliminar productos de la base de datos. Muy útil a la hora de actualizar precios de los productos."}
                    image={imgTablaProductos}
                    invertContent={true}
                />

                <ImageDetail
                    title={"Visualización de ventas"}
                    description={"En el menú 'Historial', el usuario puede visualizar la cantidad de ventas realizadas ese día. Se muestra el total vendido. Además, se puede ver el historial de ventas de días anteriores."}
                    image={imgHistorial}
                />

                <div className='divDescriptionContainer'>
                    <h2 className='principalTitle subtitleProject'>Adicional:</h2>
                </div>
                <p>
                    La idea es seguir agregando características como por ejemplo una implementación de Mercado Pago para poder
                    registrar las ventas que se realicen mediante transferencias bancarias y los egresos de dinero generados con este medio de pago.
                </p>

            </div>
        </div>
    );
}

export default Project3Detail;
