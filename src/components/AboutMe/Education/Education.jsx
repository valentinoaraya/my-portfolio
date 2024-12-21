import "./Education.css"

const Education = () => {

    return (
        <div className='timeLine'>
            <div className='timeLineItem'>
                <h3 className='year'>2020</h3>
                <div className='timeLinePoint'></div>
                <div className='timeLineContent'>
                    <h3 className='title'>Instituto San Antonio</h3>
                    <p>Bachillerato de Informática</p>
                    <p>Ví contenidos básicos de programación, algoritmos lógica de programación, bases de datos, redes, entre otros temas.</p>
                </div>
            </div>
            <div className='timeLineItem'>
                <h3 className='year'>2022</h3>
                <div className='timeLinePoint'></div>
                <div className='timeLineContent'>
                    <h3 className='title'>Coderhouse</h3>
                    <p>Carrera de Full Stack Developer</p>
                    <p>Pude aprender cómo modelar páginas web con HTML y CSS, luego, en el curso de JavaScript aprendí a darle interactividad a las páginas, para después realizar el curso de React JS, y por último el de backend con Node JS y Express.</p>
                </div>
            </div>
            <div className='timeLineItem'>
                <h3 className='year'>2023 Hoy</h3>
                <div className='timeLinePoint'></div>
                <div className='timeLineContent'>
                    <h3 className='title'>UTN - Ingeniería en Sistemas</h3>
                    <p>Ya en el tercer año de cursado puedo decir que me está gustando mucho la carrera. Aprendí Python en el primer año, mientras que en el segundo año lo seguimos profundizando, también estamos aprendiendo otros lenguajes como Java y C++ entre otros temas interesantes que se dictan en la carrera.</p>
                </div>
            </div>
            <div className='timeLineItem'>
                <h3 className='year'>Hoy</h3>
                <div className='timeLinePoint'></div>
                <div className='timeLineContent'>
                    <h3 className='title'>Educación autodidacta</h3>
                    <p>Mientras realizo la carrera, sigo formándome de manera autodidacta tomando cursos y realizando proyectos.</p>
                </div>
            </div>
            <div className='timeLineLine'></div>
        </div>
    );
}

export default Education;
