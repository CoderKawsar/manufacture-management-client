import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Purchase from "./pages/Purchase/Purchase";
import Register from "./pages/Register/Register";
import FooterArea from "./pages/shared/FooterArea";
import Navbar from "./pages/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <FooterArea />
    </>
  );
}

export default App;
