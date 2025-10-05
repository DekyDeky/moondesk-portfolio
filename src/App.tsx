import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Desktop from './pages/desktop'

import './styles/main/reset.css'
import './App.scss'

function App() {
  return (
    <BrowserRouter basename="/moondesk-portfolio">
      <Routes>
          <Route path="/" element={<Desktop />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
