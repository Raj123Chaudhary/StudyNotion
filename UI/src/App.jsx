import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import UpdatePassword from "./pages/UpdatePassword";
import Dashboard from "./pages/Dashboard";
// import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import MyProfile from "./components/core/Dashboard/MyProfile";
import EnrolledCourse from "./components/core/Dashboard/EnrolledCourse";
import StudentCart from "./components/core/Dashboard/StudentCart";

import MyCourses from "./components/core/Dashboard/Instructor/MyCourses";
function App() {
  return (
    <div className="w-full  min-h-screen  bg-[#000814] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        ></Route>
        <Route path="/signup/verify-email" element={<VerifyEmail />}></Route>
        <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        ></Route>
        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="enrolled-courses" element={<EnrolledCourse />}></Route>
          <Route path="cart" element={<StudentCart />}></Route>

          <Route path="my-courses" element={<MyCourses />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
