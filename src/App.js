import { useContext } from "react";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./Auth/AuthContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
