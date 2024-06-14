import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing.jsx";

import AppBar from "./components/Appbar.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Singup.jsx";
import NotFound from "./components/NotFound.jsx";
function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/login"} element={<Signin />} />
        <Route path={"/register"} element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
