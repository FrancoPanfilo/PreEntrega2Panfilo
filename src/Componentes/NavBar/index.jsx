import Carrito from "./CartWidget";
import Categorias from "./Categorias";
import { Link } from "react-router-dom";
function NavBar(){
    return(
        <nav className="barra">
           <Link to="/" ><div className="titulo">Atomic</div></Link>
            <Categorias />
            <Carrito/>
        </nav>
    )
}

export default NavBar;