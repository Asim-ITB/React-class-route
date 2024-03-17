import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import HomeLayout from "./components/HomeLayout";
import NotFound from "./components/NotFound";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Protected from "./components/Protected";
import Dynamic from "./pages/dynamic/Dynamic";
import GlobalContext from "./GlobalContext";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState({
    color: "",
    backgroundColor: "  ",
  });
  return (
    <>
      <GlobalContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />}>
              <Route path="" element={<div>side1</div>} />
              <Route path="side2" element={<div>side2</div>} />
              <Route path="side3" element={<div>side3</div>} />
            </Route>
            <Route path="/products/:id" element={<Dynamic />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Protected />}>
            <Route index element={<Admin />} />
            <Route path="dashboard" element={<>Dashboard</>} />
          </Route>
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
