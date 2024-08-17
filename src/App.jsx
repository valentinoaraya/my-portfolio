import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main.jsx'
import ProjectDetail from './components/ProjectDetail/ProjectDetail.jsx'

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/project-detail/:nameProject' element={<ProjectDetail/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
