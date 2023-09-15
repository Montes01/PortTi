import { Header } from "./Components/Header/Header"
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { Main } from "./Components/Main/Main"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
