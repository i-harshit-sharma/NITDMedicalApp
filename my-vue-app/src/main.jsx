import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Doctor from './components/DoctorPage/Doctor.jsx'
import './index.css'
import Login from './components/Auth/Login.jsx'
// import Editor from "./components/Editor/Editor.jsx"
// import {Footer} from './components/Footer/Footer.jsx'
import { Appointment } from './components/Appointment/Appointment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Doctor/> */}
    {/* <Login/> */}
    {/* <Footer/> */}
    {/* <Editor/> */}
    <Appointment/>
  </StrictMode>,
)
