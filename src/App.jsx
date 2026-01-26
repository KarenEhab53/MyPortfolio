import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Technologies from "./Components/Tech/Tech";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact Us/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
