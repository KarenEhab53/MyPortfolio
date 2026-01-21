import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
