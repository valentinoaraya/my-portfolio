import './App.css'
import Header from './components/common/Header/Header.jsx'
import Home from "./components/Home/Home.jsx"
import Projects from './components/Projects/Projects.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import ContactMe from './components/ContactMe/ContactMe.jsx'

function App() {

  return (
    <div>
        <Header/>
        <Home/>
        <Projects/>
        <AboutMe/>        
        <ContactMe/>
    </div>
  )
}

export default App
