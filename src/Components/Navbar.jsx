import SesionButton from "./SesionButton";

function Navbar({ isAuthenticated }) {
  return (
    <nav>
      <SesionButton isAuthenticated={isAuthenticated} />
    </nav>
  );
}

export default Navbar;
