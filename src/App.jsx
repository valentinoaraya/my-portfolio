import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main.jsx'
import Project1Detail from './components/DetailedProjects/Project1Detail/Project1Detail.jsx'
import Project2Detail from './components/DetailedProjects/Project2Detail/Project2Detail.jsx'
import Project3Detail from './components/DetailedProjects/Project3Detail/Project3Detail.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/project-detail/sportymaxx' element={<Project1Detail />} />
          <Route path='/project-detail/turnero-pami' element={<Project2Detail />} />
          <Route path='/project-detail/ventatrack' element={<Project3Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
