import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import HomeLayout from "./components/HomeLayout";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="" element={<div>side1</div>} />
            <Route path="side2" element={<div>side2</div>} />
            <Route path="side3" element={<div>side3</div>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
