import { Link } from "react-router-dom";
function Categorias() {
  return (
    <div className="categorias">
      <Link to="/Categoria/PC">
        <div>PC</div>
      </Link>
      <Link to="/Categoria/Celular">
        <div>Celular</div>
      </Link>
      <Link to="/Categoria/Musica">
        <div>Musica</div>
      </Link>
    </div>
  );
}

export default Categorias;
