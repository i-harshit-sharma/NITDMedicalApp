import LandingPage from "./components/LandingPage/LandingPage"
import { Navbar } from "./components/Navbar/Navbar"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"

function App() {
  
  

  return (
    <div className="app">
    <Navbar/>
    <LandingPage/>
   
    </div>
  )
}

export default App
