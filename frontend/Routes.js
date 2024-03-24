import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  Switch,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import { me } from "./store/authSlice";
import AuthForm from "./AuthForm";
import Publish from "./Publish";
import Subscribe from "./Subscribe";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {!auth ? (
        <Router>
          <Routes>
            <Route path="*" index element={<Publish />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/publish" element={<Publish />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/login" element={<AuthForm />} />
            <Route to="*" index element={<AuthForm />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default AppRoutes;
