import React from "react";
// import Navbar from './components/navbar/Navbar';
import "./Global.css";
import SignUp from "./components/auth/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
// import CardSec4 from "./components/cardS4/CardSec4";
import SignIn from "./components/auth/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateBootCamp1 from "./components/bootcamp/CreateBootCamp1";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./components/admin/AdminDashboard";
import CreateCourses from './components/bootcamp/CreateCourses';
import Users from './components/users/Users';


const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <ToastContainer theme="dark" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route
          path="/bootcamp"
          element={
            <AdminRoute>
              <CreateBootCamp1 />
            </AdminRoute>
          }
        /> */}
        {/* <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        /> */}
        {/* <Route index element={<CreateBootCamp1 />} /> */}

        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        >
          <Route index element={<CreateBootCamp1 />} />
          <Route path="bootcamp" element={<CreateBootCamp1 />} />
          <Route path="courses" element={<CreateCourses />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>

      {/* <CardSec4 /> */}
    </Router>
  );
};

export default App;
