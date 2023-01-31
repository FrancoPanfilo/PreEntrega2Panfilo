import Carrito from "./CartWidget";
import Categorias from "./Categorias";
import { Link } from "react-router-dom";
import Atomic from "./Atomic";
function NavBar() {
  return (
    <nav className="barra">
      <Link className="contenedorLogo" to="/">
        <div className="contenedorLogo">
          <Atomic />
        </div>
      </Link>
      <Categorias />
      <Carrito />
    </nav>
  );
}

export default NavBar;
