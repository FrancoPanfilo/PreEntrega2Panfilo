import Carrito from "./CartWidget";
import Categorias from "./Categorias";
function NavBar(){
    return(
        <nav className="barra">
            <div className="titulo">Golfing</div>
            <Categorias />
            <Carrito/>
        </nav>
    )
}

export default NavBar;