import "./App.css";
import NavBar from "./Componentes/NavBar";
import Articulos from "./Componentes/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Articulos greeting={"Te presento mi primer pagina con React.js. "} />
    </div>
  );
}

export default App;
