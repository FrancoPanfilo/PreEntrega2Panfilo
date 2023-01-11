import { Link } from "react-router-dom"
function Categorias(){
    return(
        <div className="categorias">
            <Link to="/PC"><div>PC</div></Link>
            <Link to="/Celular"><div>Celular</div></Link>
            <Link to="/Musica"><div>Musica</div></Link>
        </div>
    )
}

export default Categorias