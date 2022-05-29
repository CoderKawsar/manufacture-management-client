import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Purchase from "./pages/Purchase/Purchase";
import Register from "./pages/Register/Register";
import FooterArea from "./pages/shared/FooterArea";
import Navbar from "./pages/shared/Navbar";
import ProtectedRoute from "./pages/shared/ProtectedRoute";
import Tools from "./pages/Tools/Tools";
import MyOrders from "./pages/MyOrders/MyOrders";
import AddReview from "./pages/AddReview/AddReview";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route
          path="/tools/:id"
          element={
            <ProtectedRoute>
              <Purchase />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard></Dashboard>
            </ProtectedRoute>
          }
        >
          <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <FooterArea />
      <ToastContainer />
    </>
  );
}

export default App;
