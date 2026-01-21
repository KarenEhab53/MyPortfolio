import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Technologies from "./Components/Tech/Tech";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <About/>
      <Technologies/>
    </>
  );
}

export default App;
