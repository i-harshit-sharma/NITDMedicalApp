import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import App from './App.jsx'
import Doctor from './components/DoctorPres/DoctorPres.jsx'
import DoctorDashboard from './components/DocDash/DocDash';
import Login from './components/Auth/Login.jsx'
import { Appointment } from './components/Appointment/Appointment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Doctor/> */}
    {/* <DoctorDashboard/> */}
    {/* <Login/> */}
    {/* <Appointment/> */}
  </StrictMode>,
)