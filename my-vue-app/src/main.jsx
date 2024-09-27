import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import App from './App.jsx'
import Doctor from './components/DoctorPage/Doctor.jsx'
import './index.css'
import Login from './components/Auth/Login.jsx'
// import Test from './test.jsx'
// import Editor from "./components/Editor/Editor.jsx"
// import {Footer} from './components/Footer/Footer.jsx'
import { Appointment } from './components/Appointment/Appointment.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <LandingPage/> */}
    {/* <Doctor/> */}
    {/* <Login/> */}
    {/* <Footer/> */}
    {/* <Editor/> */}
    {/* <Appointment/> */}
    {/* <Test/> */}
  </StrictMode>,
)
