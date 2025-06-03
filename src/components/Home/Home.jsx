import "./Home.css"
import Button from '../common/Button/Button.jsx';

const Home = () => {
    return (
        <div className='mainPageContainer'>
            <main className='mainPage'>
                <div className='divInfoContainer'>
                    <h1 className='principalTitle'>Hola, parece que encontraste mi antiguo portfolio.</h1>
                    <div className='buttonContainer'>
                        <Button
                            onClick={() => window.open('https://valentinoaraya.vercel.app/', '_blank')}
                        >
                            Presiona aquí para ir al actual
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
