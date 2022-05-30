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
import Tools from "./pages/Tools/Tools";
import MyOrders from "./pages/MyOrders/MyOrders";
import AddReview from "./pages/AddReview/AddReview";
import MyProfile from "./pages/MyProfile/MyProfile";
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import AddProduct from "./pages/AddProduct/AddProduct";
import MakeAdmin from "./pages/MakeAdmin/MakeAdmin";
import RequireAuth from "./pages/shared/RequireAuth";
import RequireAdmin from "./pages/shared/RequireAdmin";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

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
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-orders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <FooterArea />
      <ToastContainer />
    </>
  );
}

export default App;
