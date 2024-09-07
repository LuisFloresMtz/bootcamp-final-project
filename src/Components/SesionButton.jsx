import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

function SesionButton({ isAuthenticated }) {
  const { login, logout } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </>
  );
}

export default SesionButton;
