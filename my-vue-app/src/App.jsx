import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import LandingPage from "./components/LandingPage/LandingPage";
import Contact from "./components/Contact/Contact";
import Login from "./components/Auth/Login";
import Register from "./components/Register/Register";
import AdminDash from "./components/AdminDash/AdminDash";
import { Appointment } from "./components/Appointment/Appointment";
import DocDash from "./components/DocDash/DocDash"; 
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/admin" element={<AdminDash />}></Route>
          <Route path="/doctor" element={<DocDash />}></Route>
          <Route path="/appointment" element={<Appointment/>}></Route>
          
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
