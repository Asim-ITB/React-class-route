import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const [redirectTime, setRedirectTime] = useState(5);

  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      if (redirectTime > 0) {
        setRedirectTime(redirectTime - 1);
      } else {
        clearInterval(timer);
        navigate("");
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [redirectTime, navigate]);
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        justifyContent: "center",
        backgroundColor: "#ff991f",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        className="error-card"
        style={{
          display: "flex",
          alignItems: "center",
          bottom: "40px",
          justifyContent: "center",
          backgroundColor: "#dfe1e5",
          border: "none",
        }}
      >
        <h1>404 Page Not Found</h1>
        <p>
          <Link to="">Back to homepage</Link>
        </p>
        <p>
          Redirecting to the home page in
          <span style={{ color: "#1677ff" }}> {redirectTime}</span> seconds...
        </p>
      </div>
    </div>
  );
}
