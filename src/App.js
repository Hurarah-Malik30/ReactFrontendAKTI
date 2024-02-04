import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutVc from "./Components/AboutVc";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";

function App() {
  return (
    <>
      {/* navbar */}

      <Navbar title="IT University" aboutText="About Us" />
      
      <Routes>
        <Route exact path="/" element={<AboutVc />}  />
        <Route exact path="/registeration" element={<Register/>}  />
      </Routes>
    </>
  );
}

export default App;
