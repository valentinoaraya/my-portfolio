import  { useEffect } from 'react';
import "./Project2Detail.css"
import HeaderDetail from '../HeaderDetail.jsx';
import ImageDetail from '../ImageDetail.jsx';
import imgProject from "../../../assets/images/turnero/paginaPrincipal.webp"
import imgDoctorCalendar from "../../../assets/images/turnero/calendarioDoctor2.webp"
import imgGestorDoctors from "../../../assets/images/turnero/gestorDoctores.webp"
import imgConfirmarTurno from "../../../assets/images/turnero/confirmarTurno.webp"
import imgTablaTurnos from "../../../assets/images/turnero/tablePatients.webp"
import imgBackend from "../../../assets/images/turnero/backendTurnero.webp"
import imgForntend from "../../../assets/images/turnero/adminDoctorCalendar.webp"

const Project2Detail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='projectDetailContainer'>
            <div className='divProjectDetail'>
                <HeaderDetail
                    volver={true}
                    title={"Turnero PAMI"}
                    website={"https://turnero.rcg.ar"}
                    stack={"React JS, Node JS, SQL."}
                    subtitle={"Turnero realizado para una clínica."}
                    description={"Sistema de gestión de turnos para pacientes PAMI para una clínica de la localidad. El sistema cuenta con un backend robusto para gestionar los datos y reglas de negocio, y un frontend dinámico e intuitivo que proporciona una experiencia de usuario agradable. Utilizamos FullCalendar para la visualización de los turnos y calendarios."}
                    imageProject={imgProject}
                    githubSection={true}
                />

                <div className='divDescriptionContainer'>
                    <div className='divStackContainer divFrontendStackContainer'>
                        <h2 className='principalTitle titleStack'>FRONT END</h2>
                        <img
                            className='imgStack'
                            src={imgForntend}
                            alt="Imagen de la página"
                        />
                        <p className='pDataProject2'>
                            <span>REACT JS</span>
                            Me permitió construir un frontend dinámico y modular, ideal para manejar la interacción en tiempo real entre los usuarios y el sistema.
                            Dividí la interfaz en componentes reutilizables, como el calendario, formularios de doctores, y la gestión de turnos.
                            Utilizando fetch se envían las peticiones correspondientes a cada endpoint de mi API.
                        </p>
                        <p className='pDataProject2'>
                            <span>FULLCALENDAR</span>
                            FullCalendar proporciona una forma visual e intuitiva de interactuar con fechas y horarios, siendo ideal para aplicaciones como esta.
                            Se meustran los turnos habilitados en el calendario con colores específicos y estilos personalizados.
                            El sistema captura eventos de usuario, como clics en fechas para habilitar/deshabilitar turnos, y los sincroniza con el backend.
                        </p>
                    </div>
                    <div className='divStackContainer divBackendStackContainer'>
                        <h2 className='principalTitle titleStack'>BACK END</h2>
                        <img
                            className='imgStack'
                            src={imgBackend}
                            alt="Imagen de código"
                        />
                        <p className='pDataProject2'>
                            <span>NODE JS + EXPRESS</span>
                            Se crearon rutas para operaciones CRUD (crear, leer, actualizar, eliminar) en entidades como doctores, turnos y pacientes.
                            Implementé validaciones y lógica compleja, como liberar un turno asignado al eliminarlo o manejar relaciones entre doctores, pacientes y turnos.
                            Se utilizaron middlewares para tareas como la verificación de datos en las solicitudes.
                            La API está desplegada en un servidor VPS con Ubuntu.
                        </p>
                        <p className='pDataProject2'>
                            <span>MySQL</span>
                            Es una base de datos relacional ideal para manejar relaciones complejas entre tablas, garantizando integridad y consistencia en los datos.
                            Se diseñaron tablas para representar entidades clave como appointments, doctors, patients y appointment_assignment.
                        </p>
                    </div>
                </div>

                <ImageDetail
                    title={"Gestión de turnos."}
                    description={"A través de la aplicación, los usuarios pueden reservar turnos disponibles con diferentes doctores o especialistas, mientras que los administradores tienen acceso a herramientas para gestionar la disponibilidad de los turnos, habilitarlos o deshabilitarlos, y asignarlos a pacientes."}
                    image={imgDoctorCalendar}
                />

                <ImageDetail
                    invertContent={true}
                    title={"Gestión de doctores."}
                    description={"El administrador puede agregar nuevos doctores al sistema con su información básica. Editar nombres y apellidos de doctores existentes. Eliminar doctores del sistema, lo que incluye la eliminación automática de sus turnos asignados y habilitados."}
                    image={imgGestorDoctors}
                />

                <ImageDetail
                    title={"Asignación de turnos a pacientes."}
                    description={"Los turnos disponibles pueden asignarse a pacientes registrados a través de un formulario de confirmación, donde una vez completado, se guarda el usuario en la base de datos si es que su DNI no existe y se redirige hacia una página donde se le descarga una foto del comprobante de confirmación en su dispositivo. El sistema almacena la información sobre cada turno asignado, incluyendo el paciente y el doctor."}
                    image={imgConfirmarTurno}
                />

                <ImageDetail
                    invertContent={true}
                    title={"Visualización de turnos asignados."}
                    description={"El administrador podrá ver los turnos que han sido asignados o tomados por los pacientes, con el doctor asociado el turno, la fecha, la hora, el número de turno y los datos de los mismos pacientes. Al mismo tiempo, podrá eliminar los turnos asignados, haciendo que el turno que estaba marcado como ocupado vuelva a estar en estado disponible."}
                    image={imgTablaTurnos}
                />
            </div>
        </div>
    );
}

export default Project2Detail;
