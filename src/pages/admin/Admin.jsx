import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  function logout() {
    Cookies.remove("token", { path: "/" });
    navigate("/login");
  }
  return (
    <div>
      Admin <button onClick={logout}> Sign out</button>
    </div>
  );
}

export default Admin;
