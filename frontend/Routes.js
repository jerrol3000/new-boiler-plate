import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import { me } from "./store/authSlice";
import AuthForm from "./AuthForm";
import Publish from "./Publish";
import Subscribe from "./Subscribe";
import { Login, Signup } from "./AuthForm";

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
            <Route path="/publish" element={<Publish />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="*" element={<Navigate to="/publish" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<AuthForm />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
