import './App.css'
import Section from "./components/utils/Section/Section.jsx"
import Header from './components/common/Header/Header.jsx'
import Home from "./components/Home/Home.jsx"
import Projects from './components/Projects/Projects.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'

function App() {

  return (
    <div>
        <Header/>
        <Home/>
        <Section>
            <Projects/>
        </Section>
        <Section>
            <AboutMe/>
        </Section>
    </div>
  )
}

export default App
