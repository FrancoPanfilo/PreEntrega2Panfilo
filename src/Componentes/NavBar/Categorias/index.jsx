function Categorias(){
    return(
        <select className="Cat" placeholder="Categoria">
                <option selected>Categoria</option>
                <option value={"1"}>Palos</option>
                <option value={"2"}>Ropa</option>
                <option value={"3"}>Herramientas</option>
        </select>
    )
}

export default Categorias