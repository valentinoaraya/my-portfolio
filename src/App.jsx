import './App.css'
import Header from './components/common/Header/Header.jsx'
import Home from "./components/Home/Home.jsx"
import Projects from './components/Projects/Projects.jsx'
import Section from "./components/utils/Section/Section.jsx"

function App() {

  return (
    <div>
        <Header/>
        <Home/>
        <Section>
            <Projects/>
        </Section>
    </div>
  )
}

export default App
