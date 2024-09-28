import LandingPage from "./components/LandingPage/LandingPage";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Services } from "./components/Services/Services";
import { Contact } from "./components/Contact/Contact";
// import Doctor from "./components/DoctorPage/Doctor";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /><LandingPage /></>} />
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        {/* <Doctor/> */}
      </div>
    </Router>
  );
}

export default App;
