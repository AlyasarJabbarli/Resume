import Header from "./components/header/Header";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./pages/resume/Resume";
import './responsive.css'
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container-main">
          <Header/>
          <div className="all">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/resume" element={<Resume />}/>
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          <Footer/>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
