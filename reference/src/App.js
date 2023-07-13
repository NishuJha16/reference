import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ErrorPage from "./pages/error";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/my-profile";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={<ErrorPage errorMessage="404 Not Found" />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
