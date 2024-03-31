import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { me } from "../redux/authSlice";
import AuthForm from "./AuthForm";
import Home from "./Home";

import { Login, Signup } from "../components/AuthForm";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = !!auth.id;

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
