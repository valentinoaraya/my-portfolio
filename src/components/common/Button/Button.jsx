import "./Button.css"

const Button = ({ children, onClick }) => {

    return (
        <button
            className="botonOriginal"
            onClick={() => onClick()}
        >
            <p className='botonTexto'>
                {children}
            </p>
        </button>
    );
}

export default Button;
