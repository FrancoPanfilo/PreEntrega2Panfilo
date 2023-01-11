import "./App.css";
import NavBar from "./Componentes/NavBar";
import Articulos from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Articulos />} />
          <Route path="/:categoria" element={<Articulos />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
