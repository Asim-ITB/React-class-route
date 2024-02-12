import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function HomeLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Navbar />
      <div style={{ marginTop: "60px", height: "100%" }}>
        <Outlet />
      </div>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "gray",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
