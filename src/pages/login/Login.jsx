import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const cookie = Cookies.get("token");
  const navigate = useNavigate();
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  async function onSubmit(e) {
    e.preventDefault();
    setSuccessMessage("");
    setError("");
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5001/login",
        data: { username, password },
      });
      console.log(response.data);
      Cookies.set("token", response.data.token, { path: "/" });
      setSuccessMessage(response.data);
      navigate("/admin");
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
    }
  }
  return (
    <>
      {!cookie ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px",
          }}
        >
          <form onSubmit={onSubmit}>
            <label
              style={{ display: "block", marginBottom: "20px" }}
              htmlFor="username"
            >
              Username:
              <input
                name="username"
                value={username}
                onChange={(e) => setUsename(e.target.value)}
                type="email"
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </label>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {successMessage && (
              <div style={{ color: "green" }}>{successMessage.msg}</div>
            )}
            <button
              style={{ display: "block", marginTop: "20px" }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <Navigate to={"/admin"} />
      )}
    </>
  );
}

export default Login;
